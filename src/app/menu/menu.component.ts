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

  toMyHome() {
    document.getElementById('home')?.scrollIntoView({ block: 'center' });
  }
  toMySkill() {
    document.getElementById('myskills')?.scrollIntoView({ block: 'start' });
  }

  toMyWork() {
    document.getElementById('myWork')?.scrollIntoView({ block: 'start' });
  }

  toAboutMe() {
    document.getElementById('aboutMe')?.scrollIntoView({ block: 'start' });
  }

  toMyContact() {
    document.getElementById('contactMe')?.scrollIntoView({ block: 'start' });
  }
}
