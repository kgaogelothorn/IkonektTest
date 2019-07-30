import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'IkonektTest';
   cartNumber = 0;

  nav = [
    {name: 'Home', link: '', },
    {name: 'Shop Brands', link: '', },
    {name: 'Shop Product Type', link: '', }
  ];

  products = [
    {
      price: '',
      priceFrom: '100.00',
      priceTo: '5,000.00',
      image: 'Skin-Renewal-Gift-Voucher-300x300.png',
      name: 'Skin Renewal Gift Voucher',
      postedin: 'Gift Vouchers',
      wishlistIcon: 'fa fa-heart',
      btn: 'Add to Wishlist',
    },
    {
      price: '130.00',
      image: 'Lamelle-Clarity-Active-Control-300x300.jpg',
      headlineImage: './../assets/lamelle.jpg',
      wishlistIcon: 'fa fa-heart',
      btn: 'Add to Wishlist',
    },
    {
      price: '175.00',
      image: 'Alpha-Lipoic-Acid-300x300.jpg',
      name: 'Alpha Lipoic Acid',
      postedin: 'Oral Supplement',
      wishlistIcon: 'fa fa-heart',
      btn: 'Add to Wishlist',
    },
    {
      price: '175.00',
      image: 'Apple-Cider-Vinegar-300x300.jpg',
      name: 'Apple Cider Vinega',
      postedin: 'Oral Supplement',
      wishlistIcon: 'fa fa-heart',
      btn: 'Add to Wishlist',
    },
  ];

  constructor() {}


  ngOnInit() {
  }

  addtoCart(product) {
  this.cartNumber +=  Number(product);
  }

  remove() {
    this.cartNumber =  this.cartNumber === 0 ? 0 : this.cartNumber -= 1;
  }
}
