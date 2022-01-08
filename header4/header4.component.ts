import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header4',
  templateUrl: './header4.component.html',
  styleUrls: ['./header4.component.scss'],
})
export class Header4Component implements OnInit {
  @ViewChild('navMenu') navMenu: ElementRef;

  dropMenu() {
    const navMenu = this.navMenu.nativeElement.parentNode.classList;
    console.log(navMenu.toggle('dBlock'));
  }
  // constructor() { }

  ngOnInit() {}
}
