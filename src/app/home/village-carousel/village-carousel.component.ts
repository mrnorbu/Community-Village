import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { getDynamicClass,initializeOwlCarousel,destroyOwlInstance} from '../../utils/utils'; 
import { VillagesService } from '../../services/villages.service';
import { RouterLink } from '@angular/router';
declare var $: any; // Declare jQuery

@Component({
  selector: 'app-village-carousel',
  templateUrl: './village-carousel.component.html',
  styleUrls: ['./village-carousel.component.css'],
  imports:[CommonModule,RouterLink]
})
export class VillageCarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(private villageService:VillagesService){
  }

  Villages:any[]=[]

  ngOnInit(): void {
    this.Villages=this.villageService.getVillages();
  }

  
  ngAfterViewInit() {
    initializeOwlCarousel('.village-carousel',true,true,5,false)
  }

 ngOnDestroy() {
    destroyOwlInstance('.village-carousel')
  }


  getClass(input:number){
    return getDynamicClass(input);
  }


}
