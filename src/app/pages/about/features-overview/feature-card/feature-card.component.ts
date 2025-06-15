import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss'],
  imports: [MatIconModule]
})
// export class FeatureCardComponent {
//   @Input() feature!: { icon: string; title: string; description: string };
// }

export class FeatureCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() icon!: string;
}




