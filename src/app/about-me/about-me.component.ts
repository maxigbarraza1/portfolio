import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../components/section-header/section-header.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {}
