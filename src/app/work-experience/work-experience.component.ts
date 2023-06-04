import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'System Engineer',
      company: 'TCS',
      duration: 'Nov 2019 - Now',
      description: [
        'Developed Functional Dashboard for Pension portal project.',
        'Enhanced the website modules assigned to me,which improved the Customer Satisfaction score by 80%.',
      ],
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
