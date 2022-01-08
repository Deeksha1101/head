import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataHeaderService } from 'src/app/services/data-header.service';

@Component({
  selector: 'app-header5',
  templateUrl: './header5.component.html',
  styleUrls: ['./header5.component.scss'],
})
export class Header5Component implements OnInit {
  @ViewChild('navMenu') navMenu: ElementRef;

  headerData = this.headerService.headerData;
  constructor(private headerService: DataHeaderService) {}
  dropMenu() {
    const navMenu = this.navMenu.nativeElement.parentNode.classList;
    console.log(navMenu.toggle('dBlock'));
  }

  ngOnInit() {}
}
