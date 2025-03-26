import { inject, Injectable } from '@angular/core';
import { GlobalEnums, paginatedEndpoints } from '../app/globalEnums.enum';
import { ApiService } from './api.service';
import { BehaviorSubject, catchError, finalize, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
private apiService = inject(ApiService)

  // ✅ Track no data and error states
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private noDataFoundSubject = new BehaviorSubject<boolean>(false);
  private errorMessageSubject = new BehaviorSubject<string | null>(null);

  private queryStateSubject = new BehaviorSubject<any>({
    type: 'paginated', // Default to paginated
    query: null,
  });

  // ✅ Expose as Observables
  loading$ = this.loadingSubject.asObservable();
  noDataFound$ = this.noDataFoundSubject.asObservable();
  errorMessage$ = this.errorMessageSubject.asObservable();
  queryState$ = this.queryStateSubject.asObservable();


constructor() { }

  // ✅ Update query dynamically from any component
    // ✅ Perform search based on query state
  updateQueryState(type: 'paginated' | 'filtered', query: any = null): void {
    this.queryStateSubject.next({ type, query });
  }


   // ✅ Fetch data dynamically based on query state
   getData(type: 'paginated' | 'filtered', query: any): Observable<any> {
    if (type === 'paginated') {
      return this.PaginatedData(query.endpoint,query.pageNo, query.itemPerPage);
    } else {
      return this.fetchFilteredData(query.category, query.districtId, query.villageId, query.searchTerm);
    }
  }



PaginatedData(
  endpoint: paginatedEndpoints,
  pageNo: number,
  itemPerPage: number = 5
): Observable<{
  items: any[];
  pageNumber: number;
  totalRecords: number;
  isDataAvailable: boolean;
  error?: boolean;
  errorMessage?: string;
  errorCode?: number;
}> {
     // ✅ Start loading before API call
     this.loadingSubject.next(true);

  return this.apiService.getPaginatedData<any>(endpoint, pageNo, itemPerPage).pipe(
    map((data: any) => {
      // ✅ Valid Data Check
      if (data && data.data && Array.isArray(data.data) && data.data.length > 0) {

           // ✅ Data found
           this.noDataFoundSubject.next(false);
           this.errorMessageSubject.next(null);

        return {

          items: data.data, // Return raw data
          pageNumber: data.pageNumber,
          totalRecords: data.totalRecords,
          isDataAvailable: true,
        };
      } else {
        // ✅ Handle No Data Case

          // ❌ No Data Found
          this.noDataFoundSubject.next(true);
          this.errorMessageSubject.next(null);


        return {
          items: [],
          pageNumber: pageNo,
          totalRecords: 0,
          isDataAvailable: false,
        };
      }
    }),
    catchError((error: any) => {
      // ✅ Extract Detailed Error Info
      const errorMessage = this.getFriendlyErrorMessage(error);
      const errorCode = error?.status || 500; // Default 500 if no status

      this.errorMessageSubject.next(errorMessage);
      this.noDataFoundSubject.next(true);

      // ✅ Return Error Response with Details
      return of({
        items: [],
        pageNumber: pageNo,
        totalRecords: 0,
        isDataAvailable: false,
        error: true,
        errorMessage, // User-friendly error message
        errorCode, // HTTP error code
      });
    }),
    finalize(() => {
      // ✅ Stop loading after API completes (success or error)
      this.loadingSubject.next(false);
    })
  );
  
}





fetchFilteredData(
  category: string, // Required
  districtId?: number,   // Optional
  villageId?: number,    // Optional
  searchTerm?: string    // Optional
): Observable<{
  items: any[];
  isDataAvailable: boolean;
  error?: boolean;
  errorMessage?: string;
  errorCode?: number;
}> {
  // ✅ Set loading to true before API call
  this.loadingSubject.next(true);
  this.noDataFoundSubject.next(false); // Reset no data state

  // Prepare API params (use undefined instead of null)
  const params = {
    category: category,
    districtId: districtId !== undefined ? districtId : undefined,
    villageId: villageId !== undefined ? villageId : undefined,
    searchTerm: searchTerm || '', // Default to empty string
  };

  return this.apiService
    .getFilteredData(
      params.category,
      params.districtId,
      params.villageId,
      params.searchTerm
    )
    .pipe(
      map((data: any) => {
        // ✅ Check if data is valid and available
        if (data && Array.isArray(data) && data.length > 0) {
          // ✅ Enrich data if necessary
          const enrichedData = data;

          // ✅ Data found – update state
          this.noDataFoundSubject.next(false);
          this.errorMessageSubject.next(null);

          return {
            items: enrichedData, // ✅ Enriched Data
            isDataAvailable: true,
          };
        } else {
          // ❌ No Data Found – return empty result
          this.noDataFoundSubject.next(true);
          this.errorMessageSubject.next(null);

          return {
            items: [],
            isDataAvailable: false,
          };
        }
      }),
      catchError((error: any) => {
        // ❌ Handle API Error
        const errorMessage = this.getFriendlyErrorMessage(error);
        const errorCode = error?.status || 500;

        this.errorMessageSubject.next(errorMessage);
        this.noDataFoundSubject.next(true);

        // ✅ Return error object with details
        return of({
          items: [],
          isDataAvailable: false,
          error: true,
          errorMessage,
          errorCode,
        });
      }),
      finalize(() => {
        // ✅ Set loading to false after API completes
        this.loadingSubject.next(false);
      })
    );
}


 // ✅ Corrected Drill Down Districts Method
 drillDownDistrict(): Observable<{
  items: any[];
  isDataAvailable: boolean;
  error?: boolean;
}> {
  return this.apiService.getData<any[]>('website/districts').pipe(
    map((data: any[]) => {
      if (Array.isArray(data) && data.length > 0) {
        return {
          items: data,
          isDataAvailable: true,
        };
      } else {
        return {
          items: [],
          isDataAvailable: false,
        };
      }
    }),
    catchError((error) => {
      return of({
        items: [],
        isDataAvailable: false,
        error: true,
      });
    })
  );
}


// ✅ Corrected Drill Down Village Method (Filtered by districtId)
drillDownVillage(districtId: number): Observable<{
  items: any[];
  isDataAvailable: boolean;
  error?: boolean;
}> {
  return this.apiService.getData<any[]>('website/villages').pipe(
    map((data: any[]) => {
      const districtIdNum = Number(districtId);

      // ✅ Filter by districtId
      const filteredData = data.filter(item => item.districtId === districtIdNum);
      if (Array.isArray(filteredData) && filteredData.length > 0) {
        return {
          items: filteredData,
          isDataAvailable: true,
        };
      } else {
        return {
          items: [],
          isDataAvailable: false,
        };
      }
    }),
    catchError((error) => {
      return of({
        items: [],
        isDataAvailable: false,
        error: true,
      });
    })
  );
}



private getFriendlyErrorMessage(error: any): string {
  const errorCode = error?.status || 500;
  console.log(error);

  switch (errorCode) {
    case 400:
      return 'Bad Request! Please check your inputs and try again. Code: 400';
    case 401:
      return 'Unauthorized access! Please log in. Code: 401';
    case 403:
      return 'Access denied! You do not have permission. Code: 403';
    case 404:
      return 'Data not found! Please try a different query. Code: 404';
    case 500:
      return 'Internal server error! Try again later. Code: 500';
    case 0:
      return 'Network error! Please check your internet connection. Code: 0';
    default:
      return error?.error?.message +' Error Code: '+error.errorCode || 'An unknown error occurred. Please try again.';
  }
}




}

