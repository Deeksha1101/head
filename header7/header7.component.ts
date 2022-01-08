import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header7',
  templateUrl: './header7.component.html',
  styleUrls: ['./header7.component.scss'],
})
export class Header7Component implements OnInit {
  @ViewChild('navDrop') navDrop: ElementRef;
  @ViewChild('dropIcon') dropIcon: ElementRef;
  @ViewChild('langDropdown') langDropdown: ElementRef;

  headerData = {
    logo: {
      src: '',
      width: '',
      height: '',
    },
    notificationBar: {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      color: {
        backgroundColor: '#002157',
        foregroundColor: '#fff',
      },
      show: true,
    },
    infoBar: {
      leftText: 'Info bar left text',
      rightText: 'Info bar right text',
      color: {
        backgroundColor: '#fff',
        foregroundColor: '#000',
      },
      show: true,
    },
    loginButton: {
      show: true,
      text: 'Login',
      color: {
        backgroundColor: '#fff',
        foregroundColor: '#000',
      },
    },
    wishlistButton: {
      show: true,
      text: 'wishlist',
      color: '',
    },
    cartButton: {
      show: true,
      text: 'My Cart',
      color: '',
    },
    search: {
      show: true,
      placholderText: 'search...',
    },
    menuData: {
      show: true,
      menuItems: [
        {
          title: 'Home',
          link: '/',
        },
        // {
        //   title: 'Shop by catg',
        //   link: '#',
        //   dropdownMenu: true,
        //   dropdownMenuData: [
        //     {
        //       title: 'Rice & Rice Products',
        //       link: '/shop/category/rice-%2526-rice-products/5UD5K6cGM0mbFh2L9vyn',
        //     },
        //     {
        //       title: 'Atta & Flour',
        //       link: '/shop/category/atta-%2526-flour/v8VLnM0rLyPznbnGqIy7',
        //     },
        //     {
        //       title: 'Dals & Pulse',
        //       link: '/shop/category/dals-%2526-pulse/DdqoN5Aac2jk4gUROvZm',
        //       subMenu: true,
        //       subMenuData: [
        //         {
        //           title: 'Rice & Rice Products',
        //           link: '/shop/category/rice-%2526-rice-products/5UD5K6cGM0mbFh2L9vyn',
        //         },
        //         {
        //           title: 'Atta & Flour',
        //           link: '/shop/category/atta-%2526-flour/v8VLnM0rLyPznbnGqIy7',
        //         },
        //       ],
        //     },
        //   ],
        // },
        {
          title: 'mega menu',
          link: '#',
          megaMenu: true,
          megaMenuData: [
            {
              title: 'category1',
              subMenu: [
                { title: 'link1', link: '#' },
                { title: 'link1', link: '#' },
                { title: 'link1', link: '#' },]
            }, {
              title: 'category2',
              subMenu: [
                { title: 'link1', link: '#' },
                { title: 'link1', link: '#' },
                { title: 'link1', link: '#' },]
            }, {
              title: 'category3',
              subMenu: [
                { title: 'link1', link: '#' },
                { title: 'link1', link: '#' },
                { title: 'link1', link: '#' },]
            },

          ],

        },
        {
          title: 'new arrives',
          link: '/',
        },
        {
          title: 'todays deal',
          link: '/',
        },
        {
          title: 'contact',
          link: '/',
        },
      ],
    },
  };
  constructor() { }

  // // Dropdown toggle btn
  // dropClick() {
  //   const catDropdown = this.catDropdown.nativeElement.classList;
  //   const dropIcon = this.dropIcon.nativeElement.classList;
  //   catDropdown.toggle('dBlock');
  //   dropIcon.toggle('dropdownIcon');
  // }

  dropNav() {
    this.navDrop.nativeElement.classList.toggle('dBlock');
  }

  dropLang() {
    const droplanguage = this.langDropdown.nativeElement.classList;
    droplanguage.toggle('dBlock');
  }

  ngOnInit() { }

}
