import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { GlobalEnums } from '../../globalEnums.enum';
import { getDynamicClass } from '../../utils/utils';
import { HomestaysService } from '../../services/homestays.service';
import { ProductsService } from '../../services/products.service';
import { ActivitiesService } from '../../services/activities.service';
import { EventsService } from '../../services/events.service';
import { VillagesService } from '../../services/villages.service';
import { IsNumberPipe } from '../../pipes/isNumber.pipe';
import {FormGroup,FormControl, ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  imports:[CommonModule, NgxPaginationModule, IsNumberPipe, ReactiveFormsModule]
})
export class SearchComponent implements OnInit {
 

constructor(
  private homestayService :HomestaysService,
  private productService:ProductsService,
  private activityService:ActivitiesService,
  private eventService:EventsService,
  private villageService:VillagesService,
) { }


Homestays:any[]=[]

Products:any[]=[]

Activities:any[]=[]

Events:any[]=[]

Villages:any[]=[]

arrayList:any=[]

page: number = 1;
GlobalEnums = GlobalEnums;
activeTab:GlobalEnums=GlobalEnums.village;
today= new Date();

userInputs = new FormGroup({
  region: new FormControl(''),
  village: new FormControl(''),
  searchTerm: new FormControl(''),
});



      ngOnInit() {
        this.getData();
       
      }

      getClass(input:number){
        return getDynamicClass(input);
      }

      setActiveTabs(selectedTab:GlobalEnums)
      {
        this.activeTab=selectedTab;
        this.page=1;
        this.getData()
      }

      getDaysLeft(eventDate: string): string {
        const event = new Date(eventDate);
        const today = new Date(); // Use a fresh instance to avoid stale values
        const diffTime = event.getTime() - today.getTime();
        const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
        return daysLeft <= 0 ? 'Ended' : `${daysLeft} days left`;
      }    

      getData() {
     
         let region= this.userInputs.get('region')?.value;
         let villge= this.userInputs.get('village')?.value;
         let searchTerm= this.userInputs.get('searchTerm')?.value;

        switch (this.activeTab) {
          case GlobalEnums.village:
            this.Villages = this.villageService.getVillages();
            this.Villages=this.filterResults(region,villge,searchTerm,this.Villages)
            break;
          case GlobalEnums.homestays:
            this.Homestays=this.homestayService.getHomestaysData();
            break;
          case GlobalEnums.activities:
            this.Activities=this.activityService.getActivities();
            break;
          case GlobalEnums.product:
            this.Products=this.productService.getProductsData();
            break;
          case GlobalEnums.events:
            this.Events =this.eventService.getEvent();
            break;
          default:
            //  default case if necessary
            break;
        }
      }
      

      filterResults(region:any, village: any, keyword: any, arr: any[]): any[] {
        return arr.filter(item => {
          const matchesDistrict = region 
            ? item.region.toLowerCase() === region.toLowerCase() 
            : true;
      
          const matchesVillage = village 
            ? item.village.toLowerCase() === village.toLowerCase() 
            : true;       
      
          const matchesKeyword = keyword
            ? item.name.toLowerCase().includes(keyword.toLowerCase()) ||
              item.category.toLowerCase().includes(keyword.toLowerCase())
            : true;
      
          return matchesDistrict && matchesVillage && matchesKeyword;
        });
      }
      

      clearFilters(){
       this.userInputs.reset();
      }
      
}
