import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-values',
  templateUrl: './grid-values.component.html',
  styleUrls: ['./grid-values.component.css']
})
export class GridValuesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
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
