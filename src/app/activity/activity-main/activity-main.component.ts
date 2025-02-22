import { Component, OnInit } from '@angular/core';
import { AdventuresComponent } from '../../home/adventures/adventures.component';

@Component({
  selector: 'app-activity-main',
  templateUrl: './activity-main.component.html',
  styleUrls: ['./activity-main.component.css'],
  imports:[AdventuresComponent]
})
export class ActivityMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
