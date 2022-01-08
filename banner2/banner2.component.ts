import {
  AfterContentChecked,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-banner2',
  templateUrl: './banner2.component.html',
  styleUrls: ['./banner2.component.scss'],
})
export class Banner2Component implements OnInit, AfterContentChecked {
  @ViewChild('swiper') swiper: SwiperComponent;

  // Slides data
  slides = [
    '../../../assets/img/banner/banner-50.png',
    '../../../assets/img/banner/banner-food.png',
    '../../../assets/img/banner/banner-free.png',
  ];
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: true,
  };
  constructor() {}
  ngAfterContentChecked() {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }

  slidePrev() {
    console.log('prev');
    // this.swiper.swiperRef.slidePrev(500);
  }
  slideNext() {
    console.log('next');
    // this.swiper.swiperRef.slideNext(500);
  }

  ngOnInit() {}
}
