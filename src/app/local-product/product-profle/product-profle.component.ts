import { Component, OnInit } from '@angular/core';
import { initializeOwlCarousel,destroyOwlInstance } from '../../utils/utils';

@Component({
  selector: 'app-product-profle',
  templateUrl: './product-profle.component.html',
  styleUrls: ['./product-profle.component.css']
})
export class ProductProfleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      initializeOwlCarousel('.productImageSwiper',false,true,1,false,[1,1,1])
    }, 1000);
  }
}
