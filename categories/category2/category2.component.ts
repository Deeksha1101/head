import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category2',
  templateUrl: './category2.component.html',
  styleUrls: ['./category2.component.scss'],
})
export class Category2Component implements OnInit {
  categoryData = [
    {
      img: '../../../../assets/img/category2/fruits-veggie.png',
      title: 'Fruits & Vegetables',
      detail:
        'Fresh Fruits, Apples, Mango, Banana, Fresh Vegetables, Potato Fresh Fruits, Apples, Mango, Banana, Fresh Vegetables.',
      link: '#',
    },
    {
      img: '../../../../assets/img/category2/grocery.png',
      title: 'grocery & stables',
      detail: 'Pulses, Atta & Other Flours, Rice & Other Grains, Dry Fruits',
      link: '#',
    },
    {
      img: '../../../../assets/img/category2/beverges.png',
      title: 'Beverages',
      detail: 'Best Offers, Cold Drinks, Juices & Drinks, Tea & Coffee, Health',
      link: '#',
    },
    {
      img: '../../../../assets/img/category2/kitchen-dining.png',
      title: 'kitchen and dining needs',
      detail: 'Cookware, Storage & Containers, Kitchen Tools & Accessories',
      link: '#',
    },
    {
      img: '../../../../assets/img/category2/household.png',
      title: 'Household Items',
      detail:
        'Disinfectants, Laundry Detergents, Cleaners, Dishwashers, Liquid',
      link: '#',
    },
    {
      img: '../../../../assets/img/category2/personal-care.png',
      title: 'Personal Care',
      detail: 'Health And Wellness, Bath & Body, Hair Care, Skin Care, Oral',
      link: '#',
    },
    {
      img: '../../../../assets/img/category2/bakery-snack.png',
      title: 'Bakery Snacks',
      detail: 'Bakery Snacks, Milk & Dahi, Bread Buns & Pavs, Eggs, Cheese Pan',
      link: '#',
    },
    {
      img: '../../../../assets/img/category2/baby-care.png',
      title: 'baby care',
      detail:
        'Baby Food, Diapers & Wipes, Baby Creams, Baby Shampoo, Baby Hair',
      link: '#',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
