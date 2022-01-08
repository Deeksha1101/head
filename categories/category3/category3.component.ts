import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category3',
  templateUrl: './category3.component.html',
  styleUrls: ['./category3.component.scss'],
})
export class Category3Component implements OnInit {
  categoryData = [
    {
      img: '../../../../assets/img/category3/fruits-veggie.png',
      title: 'vegitable & fruits',
      link: '#',
    },
    {
      img: '../../../../assets/img/category3/grocery.png',
      title: 'Grocery & Staples',
      link: '#',
    },
    {
      img: '../../../../assets/img/category3/beverages.png',
      title: 'Beverages',
      link: '#',
    },
    {
      img: '../../../../assets/img/category3/house-hold.png',
      title: 'Household items',
      link: '#',
    },
    {
      img: '../../../../assets/img/category3/personal-care.png',
      title: 'personal care',
      link: '#',
    },
    {
      img: '../../../../assets/img/category3/baby-care.png',
      title: 'body care',
      link: '#',
    },
    {
      img: '../../../../assets/img/category3/bakery-snacks.png',
      title: 'Bakery & Dairy',
      link: '#',
    },
    {
      img: '../../../../assets/img/category3/snacks.png',
      title: 'Snacks & Chips',
      link: '#',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
