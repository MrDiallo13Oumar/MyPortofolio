import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
   year = new Date().getFullYear();
  tickerItems = [
    'Angular', 'Ionic', 'Spring Boot', 'PHP', 'MySQL',
    'DevOps', 'Full-Stack', 'DevFusion', 'Conakry',
    'Architecture', 'API REST', 'Performance',
  ];
}
