import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header3',
  templateUrl: './header3.component.html',
  styleUrls: ['./header3.component.scss'],
})
export class Header3Component implements OnInit {
  @ViewChild('navMenu') navMenu: ElementRef;

  dropMenu() {
    const navMenu = this.navMenu.nativeElement.parentNode.classList;
    console.log(navMenu.toggle('dBlock'));
  }
  // constructor() { }

  ngOnInit() {}
}
