import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataHeaderService } from 'src/app/services/data-header.service';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.scss'],
})
export class Header2Component implements OnInit {
  @ViewChild('navMenu') navMenu: ElementRef;

  headerData = this.headerService.headerData;
  constructor(private headerService: DataHeaderService) {}
  dropMenu() {
    const navMenu = this.navMenu.nativeElement.parentNode.classList;
    console.log(navMenu.toggle('dBlock'));
  }

  ngOnInit() {}
}
