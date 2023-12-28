import { Component, Input } from '@angular/core';
import { SkillItem } from '../../skills/skills.component';

@Component({
  selector: 'app-skills-card',
  standalone: true,
  imports: [],
  templateUrl: './skills-card.component.html',
  styleUrl: './skills-card.component.scss',
})
export class SkillsCardComponent {
  @Input() skillItem: SkillItem | null = null;
}
