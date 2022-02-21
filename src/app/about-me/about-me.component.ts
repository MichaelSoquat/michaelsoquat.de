import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  showDescription = true;
  currentDescription = ['Front End developer', 'Game Developer', 'Web Designer', 'Your Choice:)']
  currentPositionDescription = 0;
  constructor() { }

  ngOnInit(): void {
    this.updateDescription();
  }

  updateDescription() {
    setInterval(() => {
      this.currentPositionDescription++;
      this.currentPositionDescription = this.currentPositionDescription % this.currentDescription.length;
      this.showDescription = false;

      setTimeout(() => {
        this.showDescription = true;
      }, 0.1)

    }, 5000)
  }

  tomyskill() {
    document.getElementById('myskills')?.scrollIntoView({ behavior: 'smooth' });
  }

  toMyContact() {
    document.getElementById('contactMe')?.scrollIntoView({ block: 'end' });
  }
}
