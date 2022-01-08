import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.scss'],
})
export class Product2Component implements OnInit {
  categoryData = [
    {
      img: '../../../../assets/img/category5/fruits-veggie.png',
      title: 'vegitable & fruits',
      link: '#',
    },
    {
      img: '../../../../assets/img/category5/beverages.png',
      title: 'Beverages',
      link: '#',
    },
    {
      img: '../../../../assets/img/category5/personal-care.png',
      title: 'Personal Care',
      link: '#',
    },
    {
      img: '../../../../assets/img/category5/grocery.png',
      title: 'Grocery & Staples',
      link: '#',
    },
    {
      img: '../../../../assets/img/category5/snacks.png',
      title: 'snacks',
      link: '#',
    },
    {
      img: '../../../../assets/img/category5/baby-care.png',
      title: 'Baby Care',
      link: '#',
    },
    {
      img: '../../../../assets/img/category5/house-hold.png',
      title: 'household items',
      link: '#',
    },
    {
      img: '../../../../assets/img/category5/bakery-snacks.png',
      title: 'bakery & snacks',
      link: '#',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
