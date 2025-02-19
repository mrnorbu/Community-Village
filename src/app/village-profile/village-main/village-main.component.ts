import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-village-main',
  templateUrl: './village-main.component.html',
  styleUrls: ['./village-main.component.css'],
  imports:[ProfileComponent]
})
export class VillageMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
