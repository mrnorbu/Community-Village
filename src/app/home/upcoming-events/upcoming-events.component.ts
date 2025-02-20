import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css'],
  imports:[CommonModule,NgxPaginationModule]
})
export class UpcomingEventsComponent implements OnInit{

  constructor(private eventService:EventsService) { }

  Events:any[]=[]

  ngOnInit() {
    this.Events=this.eventService.getEvent();
  }

  page: number = 1;


}
