import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
   scrolled = false;
  menuOpen = false;

  navLinks = [
    { label: 'À propos',   href: '#about'      },
    { label: 'Services',   href: '#services'   },
    { label: 'Projets',    href: '#projects'   },
    { label: 'Stack',      href: '#stack'      },
    { label: 'Parcours',   href: '#experience' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 40;
  }
}
