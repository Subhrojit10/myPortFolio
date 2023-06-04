import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'The New India Assurance(NIA)',
      technologies: 'Angular, HTML, CSS, BOOTSTRAP, IONIC',
      description: [
        'Worked as a Junior Developer to develop apps that are powered by Angular.',
        'Developed UI screens using Angular 8 with bootstrap and ionic.',
        'Working collaborating with QA and DevOps team on their issue Reported, Process improvement and analysis.',
      ],
    },
    {
      title: 'Standard Life Company part of the Phoenix Group.',
      technologies: 'Angular, HTML, CSS, BOOTSTRAP, Angular Material, NgRx, RxJs',
      description: [
        'Worked as a Senior Developer to build Website module in a pension portal',
        'Developed UI screens using Angular 10 -14 with material design, in house bootstrap framework designs.',
        'Enhanced the website modules assigned to me,which improved the Customer Satisfaction score by 80%.',
      ],
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
