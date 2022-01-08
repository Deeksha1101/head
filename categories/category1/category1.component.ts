import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category1',
  templateUrl: './category1.component.html',
  styleUrls: ['./category1.component.scss'],
})
export class Category1Component implements OnInit {
  categoryData = [
    {
      img: '../../../../assets/img/category1/fruit-basket.png',
      title: 'vegitable & fruits',
      link: '#',
    },
    {
      img: '../../../../assets/img/category1/breakfast-dairy.png',
      title: 'Bakery & Dairy',
      link: '#',
    },
    {
      img: '../../../../assets/img/category1/beverage.png',
      title: 'Beverages',
      link: '#',
    },
    {
      img: '../../../../assets/img/category1/personal-care.png',
      title: 'Personal Care',
      link: '#',
    },
    {
      img: '../../../../assets/img/category1/household.png',
      title: 'Household Needs',
      link: '#',
    },
    {
      img: '../../../../assets/img/category1/grocery.png',
      title: 'Grocery & Staples',
      link: '#',
    },
    {
      img: '../../../../assets/img/category1/baby-pet-care.png',
      title: 'Baby & Pet Care',
      link: '#',
    },
    {
      img: '../../../../assets/img/category1/snacks.png',
      title: 'Snacks & Chips',
      link: '#',
    },
    {
      img: '../../../../assets/img/category1/home-kitchen.png',
      title: 'Home & Kitchen',
      link: '#',
    },
    {
      img: '../../../../assets/img/category1/body-care.png',
      title: 'Body Care',
      link: '#',
    },
    {
      img: '../../../../assets/img/category1/frozen-food.png',
      title: 'Fresh & Frozon Food',
      link: '#',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
