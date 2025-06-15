
import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { MissionStatementComponent } from '../mission-statement/mission-statement.component';
import { FeaturesOverviewComponent } from '../features-overview/features-overview.component';
import { OurVisionComponent } from '../our-vision/our-vision.component';
import { CallToActionComponent } from '../call-to-action/call-to-action.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    HeroSectionComponent,
    MissionStatementComponent,
    FeaturesOverviewComponent,
    OurVisionComponent,
    CallToActionComponent
  ],
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent { }
