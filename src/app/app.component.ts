import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';
import { VillageCarouselComponent } from './home/village-carousel/village-carousel.component';
import { HomestaysCarouselComponent } from './home/homestays-carousel/homestays-carousel.component';
import { AdventuresComponent } from './home/adventures/adventures.component';
import { UpcomingEventsComponent } from './home/upcoming-events/upcoming-events.component';
import { ProductsCarouselComponent } from './home/products-carousel/products-carousel.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavBarComponent,HeroSectionComponent,VillageCarouselComponent,HomestaysCarouselComponent,
    AdventuresComponent,UpcomingEventsComponent,ProductsCarouselComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Community-Village';
}
