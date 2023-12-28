import { Component, OnInit } from '@angular/core';
import { ExperienceItemComponent } from '../components/experience-item/experience-item.component';
import { SectionHeaderComponent } from '../components/section-header/section-header.component';

export interface ExperienceItem {
  company: string;
  position: string;
  date: string;
  description: string;
  stack: string;
  companyUrl: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionHeaderComponent, ExperienceItemComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements OnInit {
  experiences: ExperienceItem[] = [];

  ngOnInit(): void {
    this.experiences = [
      {
        company: 'Alamano',
        position: 'Desarrollador Full Stack',
        date: 'Sept 2023 - Presente',
        description:
          'Diseño, desarollo y mantenimiento de APIs y componentes visuales. Además, he podido aumentar el rendimiento de las mismas optimizando las consultas a la base de datos basandome en la eficiencia e integridad de los datos sin perder el rumbo de la escalabilidad.',
        stack: 'PHP, Laravel, MySql, WebSockets, Postman, Angular y Git',
        companyUrl: 'www.alamano.com.uy',
      },
      {
        company: 'Alamano',
        position: 'Desarrollador Angular',
        date: 'Oct 2022 - Sept 2023',
        description:
          'Traducir las necesidades del cliente en componentes visuales que cumplan con los estándares de calidad y usabilidad sin perder el foco en la escalabilidad. He implementado arquitecturas limpias, patrones de diseño y colaborado con el equipo de backend para integracion agil y continua.',
        stack:
          'Angular, Typescript, Redux, Rxjs, WebSockets, Postman, UX UI, Angular Material y Git',
        companyUrl: 'www.alamano.com.uy',
      },
      {
        company: 'Moby Digital',
        position: 'Desarrollador Frontend',
        date: 'Abr 2022 - Jun 2022',
        description:
          'Integrar nuevas funcionalidades diseñadas por el equipo de UX/UI, mantenimiento y refactorización de codigo legacy. He colaborado con el equipo de backend para integracion agil y continua',
        stack:
          'Angular, Typescript, Redux, Rxjs, WebSockets, Postman, Sonar, Angular Material y Git',
        companyUrl: 'www.mobydigital.com',
      },
    ];
  }
}
