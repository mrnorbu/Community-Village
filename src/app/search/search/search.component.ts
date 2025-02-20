import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavBarComponent } from '../../home/nav-bar/nav-bar.component';
import { GlobalEnums } from '../../globalEnums.enum';
import { getDynamicClass } from '../../utils/utils';
import { HomestaysService } from '../../services/homestays.service';
import { ProductsService } from '../../services/products.service';
import { ActivitiesService } from '../../services/activities.service';
import { EventsService } from '../../services/events.service';
import { VillagesService } from '../../services/villages.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  imports:[CommonModule,NgxPaginationModule,NavBarComponent]
})
export class SearchComponent implements OnInit {

constructor(private homestayService :HomestaysService,private productService:ProductsService,
  private activityService:ActivitiesService,private eventService:EventsService,
  private villageService:VillagesService
) { }

Homestays:any[]=[];
Products:any[]=[];
Activities:any[]=[];
Events:any[]=[];
Villages:any[]=[]
page: number = 1;
GlobalEnums =GlobalEnums;
activeTab:GlobalEnums=GlobalEnums.village;
today= new Date();

      ngOnInit() {
        this.Homestays=this.homestayService.getHomestaysData();
        this.Products=this.productService.getProductsData();
        this.Activities=this.activityService.getActivities();
        this.Events =this.eventService.getEvent();
        this.Villages=this.villageService.getVillages();
      }

 
      getClass(input:number){
        return getDynamicClass(input);
      }

   
      setActiveTabs(selectedTab:GlobalEnums)
      {
        this.activeTab=selectedTab;
        this.page=1;
      }

      getDaysLeft(eventDate: string): string {
        const event = new Date(eventDate);
        const today = new Date(); // Use a fresh instance to avoid stale values
        const diffTime = event.getTime() - today.getTime();
        const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
        return daysLeft <= 0 ? 'Ended' : `${daysLeft} days left`;
      }    


}
