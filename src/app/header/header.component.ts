import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  currentSection: string = 'inicio';

  constructor() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkSection();
  }

  checkSection() {
    const scrollPosition =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const sections: any = {
      inicio: this.getSectionOffset('inicio'),
      habilidades: this.getSectionOffset('habilidades'),
      experiencia: this.getSectionOffset('experiencia'),
    };

    for (const sectionId in sections) {
      const section = sections[sectionId];
      if (section) {
        const { top, bottom } = section;
        if (scrollPosition >= top && scrollPosition < bottom) {
          this.currentSection = sectionId;
          break;
        }
      }
    }

    if (scrollPosition + windowHeight >= documentHeight) {
      this.currentSection = 'contacto';
    }
  }

  getSectionOffset(sectionId: string): { top: number; bottom: number } | null {
    const section = document.getElementById(sectionId);
    if (section) {
      const rect = section.getBoundingClientRect();
      return {
        top: rect.top + window.scrollY,
        bottom: rect.bottom + window.scrollY,
      };
    }
    return null;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }
}
