import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category4',
  templateUrl: './category4.component.html',
  styleUrls: ['./category4.component.scss'],
})
export class Category4Component implements OnInit {
  categoryData = [
    {
      img: '../../../../assets/img/category3/fruits-veggie.png',
      title: 'vegitable & fruits',
      link: '#',
      bgColor: '#eeffd7',
    },
    {
      img: '../../../../assets/img/category3/grocery.png',
      title: 'Grocery & Staples',
      link: '#',
      bgColor: '#f4f4e6',
    },
    {
      img: '../../../../assets/img/category3/beverages.png',
      title: 'Beverages',
      link: '#',
      bgColor: '#ffefdb',
    },
    {
      img: '../../../../assets/img/category3/house-hold.png',
      title: 'Household items',
      link: '#',
      bgColor: '#fffdd9',
    },
    {
      img: '../../../../assets/img/category3/personal-care.png',
      title: 'personal care',
      link: '#',
      bgColor: '#f9f6e4',
    },
    {
      img: '../../../../assets/img/category3/baby-care.png',
      title: 'body care',
      link: '#',
      bgColor: '#e2f6fa',
    },
    {
      img: '../../../../assets/img/category3/bakery-snacks.png',
      title: 'Bakery & Dairy',
      link: '#',
      bgColor: '#f4eefa',
    },
    {
      img: '../../../../assets/img/category3/snacks.png',
      title: 'Snacks & Chips',
      link: '#',
      bgColor: '#ffe4f4',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
