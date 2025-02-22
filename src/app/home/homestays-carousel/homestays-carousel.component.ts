import { CommonModule } from '@angular/common';
import { Component, OnInit ,AfterViewInit,OnDestroy} from '@angular/core';
import { getDynamicClass,initializeOwlCarousel,destroyOwlInstance } from '../../utils/utils';
import { HomestaysService } from '../../services/homestays.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homestays-carousel',
  templateUrl: './homestays-carousel.component.html',
  styleUrls: ['./homestays-carousel.component.css'],
  imports:[CommonModule,RouterLink]
})
export class HomestaysCarouselComponent implements OnInit ,AfterViewInit,OnDestroy{

  constructor(private homestayService:HomestaysService) { }
  Homestays:any[]=[];
  
  ngOnInit() {
    this.Homestays=this.homestayService.getHomestaysData();
  }

  ngAfterViewInit(): void {

    initializeOwlCarousel('.homestays-carousel',true,true,5,false,[2,3,4]) 
  }

  ngOnDestroy() {
    destroyOwlInstance('.homestays-carousel')
  }


getClass(input:number){
  return getDynamicClass(input);
}


}
