import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() darkMode = true;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  toMySkill() {
    document.getElementById('contactMe')?.scrollIntoView({ block: 'center' });
  }

  toMyWork() {
    document.getElementById('contactMe')?.scrollIntoView({ block: 'center' });
  }

  toAboutMe() {
    document.getElementById('contactMe')?.scrollIntoView({ block: 'center' });
  }

  toMyContact() {
    document.getElementById('contactMe')?.scrollIntoView({ block: 'center' });
  }
}
