import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataHeaderService } from 'src/app/services/data-header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('catDropdown') catDropdown: ElementRef;
  @ViewChild('navDrop') navDrop: ElementRef;
  @ViewChild('dropIcon') dropIcon: ElementRef;
  @ViewChild('langDropdown') langDropdown: ElementRef;

  headerData = this.headerService.headerData;
  constructor(private headerService: DataHeaderService) {}

  // Dropdown toggle btn
  dropClick() {
    const catDropdown = this.catDropdown.nativeElement.classList;
    const dropIcon = this.dropIcon.nativeElement.classList;
    catDropdown.toggle('dBlock');
    dropIcon.toggle('dropdownIcon');
  }

  dropNav() {
    this.navDrop.nativeElement.classList.toggle('dBlock');
  }

  dropLang() {
    const droplanguage = this.langDropdown.nativeElement.classList;
    droplanguage.toggle('dBlock');
  }

  ngOnInit() {}
}
