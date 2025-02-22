import { Component, OnInit } from '@angular/core';
import { EventsCarouselComponent } from '../../village-profile/events-carousel/events-carousel.component';

@Component({
  selector: 'app-event-main',
  templateUrl: './event-main.component.html',
  styleUrls: ['./event-main.component.css'],
  imports:[EventsCarouselComponent]
})
export class EventMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
