
import { Component } from '@angular/core';
import { FeatureCardComponent } from './feature-card/feature-card.component';

@Component({
  selector: 'app-features-overview',
  standalone: true,
  imports: [FeatureCardComponent],
  templateUrl: './features-overview.component.html',
  styleUrls: ['./features-overview.component.scss']
})
export class FeaturesOverviewComponent {
  features = [
    {
      icon: 'group',
      title: 'Dynamic Communities',
      description: 'Join and create communities tailored to your passions, from gaming to gardening.'
    },
    {
      icon: 'chat',
      title: 'Real-time Chat Rooms',
      description: 'Engage in seamless, instant conversations within dedicated community chat rooms.'
    },
    {
      icon: 'rss_feed',
      title: 'Personalized Feeds',
      description: 'Discover trending topics and connect with like-minded individuals.'
    }
  ];
}
