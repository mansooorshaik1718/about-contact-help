import {
  Component,
 } from '@angular/core';

import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';


@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  animations: [

    trigger('textReveal', [
      transition(':enter, in => in', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('fadeIn', [
      transition(':enter, in => in', [
        style({ opacity: 0 }),
        animate('1200ms ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HeroSectionComponent { }

