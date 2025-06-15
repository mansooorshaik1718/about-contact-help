import { Component, HostListener } from '@angular/core';

import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-mission-statement',
  standalone: true,
  templateUrl: './mission-statement.component.html',
  styleUrls: ['./mission-statement.component.scss'],

  animations: [
    trigger('fadeInOnScroll', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('1000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],

})
export class MissionStatementComponent { }
