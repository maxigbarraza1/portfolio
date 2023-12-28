import { Component, OnInit } from '@angular/core';
import { SectionHeaderComponent } from '../components/section-header/section-header.component';
import { SkillsCardComponent } from '../components/skills-card/skills-card.component';

export interface SkillItem {
  title: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionHeaderComponent, SkillsCardComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  skills: SkillItem[] = [];

  ngOnInit(): void {
    this.skills = [
      {
        title: 'Frontend',
        items: ['Angular', 'Redux', 'RxJs', 'Typescript'],
      },
      {
        title: 'Backend',
        items: [
          'Laravel',
          'NodeJs',
          'SQL (Postgre, MySql)',
          'NoSQL (Mongo, Firebase)',
        ],
      },
      {
        title: 'Herramientas',
        items: ['GIT', 'Postman / Swagger', 'Unit Testing', 'Scrum / Kanban'],
      },
    ];
  }
}
