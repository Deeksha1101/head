import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  groceryShop = [
    { title: 'My Orders', url: '#' },
    { title: 'My Wishist', url: '#' },
    { title: 'Refer & Earn', url: '#' },
    { title: 'Letest Offers', url: '#' },
    { title: 'New Added', url: '#' },
  ];
  constructor() {}

  ngOnInit() {}
}
