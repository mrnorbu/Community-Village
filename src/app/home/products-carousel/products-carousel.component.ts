import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { getDynamicClass,initializeOwlCarousel,destroyOwlInstance } from '../../utils/utils';
import { ProductsService } from '../../services/products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrls: ['./products-carousel.component.css'],
  imports:[CommonModule,RouterLink]
})
export class ProductsCarouselComponent implements OnInit, AfterViewInit, OnDestroy  {

  constructor(private productService:ProductsService) { }

  Products:any[]=[];

  ngOnInit() {
    this.Products=this.productService.getProductsData();
  }

  ngAfterViewInit(): void {
    initializeOwlCarousel('.product-carousel',true,true,24,false,[1,3,4]);
  }

  ngOnDestroy() {
    destroyOwlInstance('.product-carousel')
  }


getClass(input:number){
  return getDynamicClass(input);
}


}
