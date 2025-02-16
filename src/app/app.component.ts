import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';
import { VillageCarouselComponent } from './home/village-carousel/village-carousel.component';
import { GridValuesComponent } from './home/grid-values/grid-values.component';
import { HomestaysCarouselComponent } from './home/homestays-carousel/homestays-carousel.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavBarComponent,HeroSectionComponent,VillageCarouselComponent,GridValuesComponent,HomestaysCarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Community-Village';
}
