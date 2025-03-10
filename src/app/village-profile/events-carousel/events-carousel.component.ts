import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { getDynamicClass,destroyOwlInstance,initializeOwlCarousel } from '../../utils/utils';
import { EventsService } from '../../../services/events.service';

declare var $:any
@Component({
  selector: 'app-events-carousel',
  templateUrl: './events-carousel.component.html',
  styleUrls: ['./events-carousel.component.css'],
  imports:[CommonModule]
})
export class EventsCarouselComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private eventService:EventsService) { }

  Events:any[]=[]

  ngOnInit() {
    this.Events=this.eventService.getEvent()
  }
  
    ngAfterViewInit(): void {
      initializeOwlCarousel('.event-carousel',true,true,10,false,[2,3,5])
  }
  
   
    ngOnDestroy() {
      destroyOwlInstance('.event-carousel')
    }
  
 
 getClass(input:number){
   return getDynamicClass(input);
 }
 
    

}
