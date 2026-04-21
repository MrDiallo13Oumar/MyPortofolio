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
    { label: 'Projets', href: '/sites/projets', isExternal: false },
    { label: 'Parcours', href: '/sites/experience', isExternal: false },
    { label: 'WhatsApp', href: 'https://wa.me/224624226778', isExternal: true },
  ];


  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 40;
  }
}
