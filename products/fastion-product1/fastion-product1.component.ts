import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fastion-product1',
  templateUrl: './fastion-product1.component.html',
  styleUrls: ['./fastion-product1.component.scss'],
})
export class FastionProduct1Component implements OnInit {
  categoryData = [
    {
      img: '../../../../assets/img/fastion1/russ-shirt1.png',
      title: 'russ shirt',
      link: '#',
    },
    {
      img: '../../../../assets/img/fastion1/russ-shirt1.png',
      title: 'men olive green slim fit solid casual shirt',
      link: '#',
    },
    {
      img: '../../../../assets/img/fastion1/russ-shirt1.png',
      title: 'Women Purple Embroidered Kurta with Trousers',
      link: '#',
    },
    {
      img: '../../../../assets/img/fastion1/russ-shirt1.png',
      title: 'Carolina Hand Block Printed Dress with Jacket',
      link: '#',
    },
    {
      img: '../../../../assets/img/fastion1/russ-shirt1.png',
      title: 'Striped Crew-Neck T-shirt',
      link: '#',
    },
    {
      img: '../../../../assets/img/fastion1/russ-shirt1.png',
      title: 'Striped Full Sleeves Classic Shirt',
      link: '#',
    },
    {
      img: '../../../../assets/img/fastion1/russ-shirt1.png',
      title: 'Geometric Print Flared Kurta',
      link: '#',
    },
    {
      img: '../../../../assets/img/fastion1/russ-shirt1.png',
      title: 'Floral Print 3/4th Sleeves Top',
      link: '#',
    },
    {
      img: '../../../../assets/img/fastion1/russ-shirt1.png',
      title: 'Carolina Hand Block Printed Dress with Jacket',
      link: '#',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
