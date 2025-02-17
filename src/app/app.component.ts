import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { ProfileComponent } from './village-profile/profile/profile.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Community-Village';
}
