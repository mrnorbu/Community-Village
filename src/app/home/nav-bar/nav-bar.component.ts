import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faTree, faSearch, faBicycle, faShoppingBasket, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink,RouterLinkActive,FontAwesomeModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  faHome = faHome;
  faTree = faTree;
  faSearch = faSearch;
  faBicycle = faBicycle;
  faShoppingBasket = faShoppingBasket;
  farCalendarAlt = faCalendarAlt; // Regular icon for calendar
}
