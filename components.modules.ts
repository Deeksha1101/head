import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';
import { Footer2Component } from './footer2/footer2.component';
import { HeaderComponent } from './header/header.component';
import { Header2Component } from './header2/header2.component';
import { Header3Component } from './header3/header3.component';
import { Header4Component } from './header4/header4.component';
import { Header5Component } from './header5/header5.component';
import { Header6Component } from './header6/header6.component';
import { Header8Component } from './header8/header8.component'

import { BannerComponent } from './banner/banner.component';
import { SwiperModule } from 'swiper/angular';
import { Banner2Component } from './banner2/banner2.component';
import { Banner3Component } from './banner3/banner3.component';
import { Banner4Component } from './banner4/banner4.component';
import { Category1Component } from './categories/category1/category1.component';
import { Category2Component } from './categories/category2/category2.component';
import { Category3Component } from './categories/category3/category3.component';
import { Category4Component } from './categories/category4/category4.component';
import { Category5Component } from './categories/category5/category5.component';
import { Category6Component } from './categories/category6/category6.component';
import { Category7Component } from './categories/category7/category7.component';
import { Product1Component } from './products/product1/product1.component';
import { Product2Component } from './products/product2/product2.component';
import { Product3Component } from './products/product3/product3.component';
import { Product4Component } from './products/product4/product4.component';
import { Product9Component } from './products/product9/product9.component';
import { FastionProduct1Component } from './products/fastion-product1/fastion-product1.component';
import { FastionProduct2Component } from './products/fastion-product2/fastion-product2.component';
import { FastionProduct3Component } from './products/fastion-product3/fastion-product3.component';
import { FastionProduct4Component } from './products/fastion-product4/fastion-product4.component';
import { Header7Component } from './header7/header7.component';

@NgModule({
  declarations: [
    HeaderComponent,
    Header2Component,
    Header3Component,
    Header4Component,
    Header5Component,
    Header6Component,
    Header8Component,
    FooterComponent,
    Footer2Component,
    BannerComponent,
    Banner2Component,
    Banner3Component,
    Banner4Component,
    Category1Component,
    Category2Component,
    Category3Component,
    Category4Component,
    Category5Component,
    Category6Component,
    Category7Component,
    Product1Component,
    Product2Component,
    Product3Component,
    Product4Component,
    Product9Component,
    FastionProduct1Component,
    FastionProduct2Component,
    FastionProduct3Component,
    FastionProduct4Component,
    Header7Component
  ],
  exports: [
    HeaderComponent,
    Header2Component,
    Header3Component,
    Header4Component,
    Header5Component,
    Header6Component,
    Header8Component,
    FooterComponent,
    Footer2Component,
    BannerComponent,
    Banner2Component,
    Banner3Component,
    Banner4Component,
    Category1Component,
    Category2Component,
    Category3Component,
    Category4Component,
    Category5Component,
    Category6Component,
    Category7Component,
    Product1Component,
    Product2Component,
    Product3Component,
    Product4Component,
    Product9Component,
    FastionProduct1Component,
    FastionProduct2Component,
    FastionProduct3Component,
    FastionProduct4Component,
    Header7Component
  ],
  imports: [IonicModule, CommonModule, SwiperModule],
})
export class ComponentsModule { }
