import { Component, OnInit } from '@angular/core';
import { ProductsCarouselComponent } from '../../home/products-carousel/products-carousel.component';

@Component({
  selector: 'app-localProduct-main',
  templateUrl: './localProduct-main.component.html',
  styleUrls: ['./localProduct-main.component.css'],
  imports:[ProductsCarouselComponent]
})
export class LocalProductMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
