import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IkonektTest';
   cartNumber = 0;

  nav = [
    {name: 'Home', link: '', },
    {name: 'Shop Brands', link: '', },
    {name: 'Shop Product Type', link: '', }
  ];

  products = [
    {
      price: 'R100.00 - R 5000.00',
      name: 'Skin Renewal Gift Voucher',
      image: 'Skin-Renewal-Gift-Voucher-300x300',
      headline: 'Gift Vouchers',
      wishlistIcon: 'fa fa-heart',
      btn: 'Add to Wishlist',
    },
    {
      price: 'R130',
      image: 'Lamelle-Clarity-Active-Control-300x300',
      headline: './../assets/lamelle.jpg',
      wishlistIcon: 'fa fa-heart',
      btn: 'Add to Wishlist',
    },
    {
      price: 'R175',
      name: 'Alpha Lipoic Acid',
      image: 'Alpha-Lipoic-Acid-300x300',
      headline: 'Oral Supplement',
      wishlistIcon: 'fa fa-heart',
      btn: 'Add to Wishlist',
    },
    {
      price: 'R175',
      name: 'Apple Cider Vinega',
      image: 'Apple-Cider-Vinegar-300x300',
      headline: 'Oral Supplement',
      wishlistIcon: 'fa fa-heart',
      btn: 'Add to Wishlist',
    },
  ];
}
