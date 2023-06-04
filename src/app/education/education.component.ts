import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "St. Thomas' College of Engineering and Technology",
      course: 'BTech in Electrical Engineering',
      duration: '2015-2019',
      score: '8.28 CGPA',
    },
    {
      institute: 'MANSUR HABIBULLAH MEMORIAL SCHOOL,KOLKATA',
      course: 'HSC',
      duration: '2013-2015',
      score: '89.5%',
    },
    {
      institute: 'MEGHMALA ROY EDUCATION CENTRE,KOLKATA',
      course: 'SSC',
      duration: '2003-2013',
      score: '88.67%',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
