import { Component, OnInit } from '@angular/core';
import { initializeOwlCarousel,destroyOwlInstance } from '../../utils/utils';

@Component({
  selector: 'app-homestay-profile',
  templateUrl: './homestay-profile.component.html',
  styleUrls: ['./homestay-profile.component.css']
})
export class HomestayProfileComponent implements OnInit {

  constructor() { }
ngOnInit() {
    setTimeout(() => {
      initializeOwlCarousel('.homestayGallerySwiper',false,true,1,false,[1,1,1])
    }, 1000);
  }
  
}
