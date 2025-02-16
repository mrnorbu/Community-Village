import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeMainComponent } from './home/home-main/home-main.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Community-Village';
}
