import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IkonektTest';

  cartNumber = 55;

  nav = [
    { name: 'Home', link: '', },
    {name: 'Shop Brands', link: '', },
    {name: 'Shop Product Type', link: '', }
  ];
}
