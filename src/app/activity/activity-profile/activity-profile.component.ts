import { Component, OnInit } from '@angular/core';
import { initializeOwlCarousel,destroyOwlInstance } from '../../utils/utils';

@Component({
  selector: 'app-activity-profile',
  templateUrl: './activity-profile.component.html',
  styleUrls: ['./activity-profile.component.css']
})
export class ActivityProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      initializeOwlCarousel('.activity-profile-carousel',false,true,1,false,[1,1,1])
    }, 1000);
  }

  

}
