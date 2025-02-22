import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivitiesService } from '../../services/activities.service';
import { getDynamicClass,initializeOwlCarousel,destroyOwlInstance } from '../../utils/utils';
import { RouterLink } from '@angular/router';
declare var $: any; // Declare jQuery

@Component({
  selector: 'app-adventures',
  templateUrl: './adventures.component.html',
  styleUrls: ['./adventures.component.css'],
  imports:[CommonModule,RouterLink]
})
export class AdventuresComponent implements OnInit ,AfterViewInit,OnDestroy{

  constructor(private activitiesService: ActivitiesService) { }
  Activities:any[]=[];

  ngOnInit() {
  this.Activities=this.activitiesService.getActivities();
  }

  
  ngAfterViewInit(): void {
    initializeOwlCarousel('.adventure-carousel',true,true,5,false,[2,3,4]);
}

  ngOnDestroy() {
    destroyOwlInstance('.adventure-carousel')
  }


getClass(input:number):string
{
  return getDynamicClass(input)
}

}
