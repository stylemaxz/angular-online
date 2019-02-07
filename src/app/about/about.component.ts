import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title = 'Hell Yah!';
  age: number ;
  info = { email: 'john@gmail.com' };
  logo = './assets/images/john.png';
  imgWidth = 100;
  isShow = false;
  users = ['John', 'Mary', 'Max' ];
  course = [
    { name: 'JAVA', price: 4000 },
    { name: 'ANGULAR', price: 5000 },
    { name: 'PHP', price: 2000 }
  ];
  myColor = 'yellow';
  isActive = false;

  constructor() {
    this.age = 10;
  }

  ngOnInit() {
    this.title = 'About us';
  }

  go() {
    this.title = 'เกี่ยวกับเรา';
    this.imgWidth = 300;
    // this.isShow = true;
    this.isShow = !this.isShow;
    this.myColor = 'red';
    this.isActive = !this.isActive;
  }

}
