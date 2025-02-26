import { Component, OnInit } from '@angular/core';
import { HomestaysCarouselComponent } from '../../home/homestays-carousel/homestays-carousel.component';
import { HomestayProfileComponent } from '../homestay-profile/homestay-profile.component';

@Component({
  selector: 'app-homestay-main',
  templateUrl: './homestay-main.component.html',
  styleUrls: ['./homestay-main.component.css'],
  imports:[HomestaysCarouselComponent,HomestayProfileComponent]
})
export class HomestayMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
