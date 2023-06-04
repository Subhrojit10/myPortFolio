import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material, NgRx, RxJs',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'Typescript, Javascript, Jquery',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'HTML, CSS, Bootstrap',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'JAVA, Java Spring Boot',
      level: 'Intermidiate',
      rating: 75,
    },
    {
      name: 'C',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'Data structures and algorithms',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'Computer Science Fundamentals',
      level: 'Intermidiate',
      rating: 70,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
