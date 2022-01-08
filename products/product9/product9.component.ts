import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product9',
  templateUrl: './product9.component.html',
  styleUrls: ['./product9.component.scss'],
})
export class Product9Component implements OnInit {
  categoryData = [
    {
      img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjaWFsJTIwY2xlYW5zZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      title: 'Facial Cleanser',
      price: 'Rs.325',
      star: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/77075/blue-star-clipart-md.png'
    },
    {
      img: 'https://images.unsplash.com/photo-1621770522850-b226f8e00158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      title: 'Coffee Bean Caffiene Eye Cream',
      price: 'Rs.325',
      star: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/77075/blue-star-clipart-md.png'
    },
    {
      img: 'https://images.unsplash.com/photo-1585232350744-974fc9804d65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Bio-shroom Rejuvenating Serum',
      price: 'Rs.399',
      star: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/77075/blue-star-clipart-md.png'
    },
    {
      img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Bio Makeup Kit',
      price: 'Rs.325',
      star: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/77075/blue-star-clipart-md.png'
    },
    {
      img: 'https://images.unsplash.com/photo-1551446339-1e5c6f164ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Facial Cleanser',
      price: 'Rs.700',
      star: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/77075/blue-star-clipart-md.png'
    },
    {
      img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjaWFsJTIwY2xlYW5zZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      title: 'Bio-shroom Rejuvenating Serum',
      price: 'Rs.325',
      star: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/77075/blue-star-clipart-md.png'
    },
    {
      img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjaWFsJTIwY2xlYW5zZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      title: 'Coffee Bean Caffiene Eye Cream',
      price: 'Rs.400',
      star: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/77075/blue-star-clipart-md.png'
    },
    {
      img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjaWFsJTIwY2xlYW5zZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      title: 'Bio Makeup Kit',
      price: 'Rs.325',
      star: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/77075/blue-star-clipart-md.png'
    }
  ]

  constructor() { }

  ngOnInit() { }

}
