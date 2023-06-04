import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Subhrojit Bhattacharjee'],
    ['DOB', '22/02/1998'],
    ['Work Exp', '3.6 Years'],
    ['Education', 'BTech'],
    ['Interests', 'Cricket, Web Development'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer with 3.6+ years of experience in software industry.',
    'Worked as a Frontend Developer in TCS for devoping Web Applications using technologies such as(Angular 7-14, NgRx store, Material design, Bootstrap, JavaScript, HTML5 and CSS3.).',
    'Delivered all product withing deadlines. Always eager to learn new technologies.',
    'Currently, Leading a team of 2 Junior Developer for developing a new module',
  ];

  constructor() {}

  ngOnInit(): void {}
}
