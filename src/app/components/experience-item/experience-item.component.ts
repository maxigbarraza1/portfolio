import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExperienceItem } from '../../experience/experience.component';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.scss',
})
export class ExperienceItemComponent {
  @Input() experience: ExperienceItem | null = null;
}
