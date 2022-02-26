import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {
  angular = true;
  js = true;
  constructor() { }

  ngOnInit(): void {
  }

  showAllWork() {
    this.angular = true;
    this.js = true;
  }

  showAngularWork() {
    this.js = false;
    this.angular = true;
  }

  showJsWork() {
    this.angular = false;
    this.js = true;
  }


}
