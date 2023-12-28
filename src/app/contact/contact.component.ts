import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../components/section-header/section-header.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
