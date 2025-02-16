import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {

  gridValues=[
    {
      villageCommunities:100,
      homeStays:800,
      thingsToDo:400,
      localProducts:900,
      events:300
    }
  ];

}
