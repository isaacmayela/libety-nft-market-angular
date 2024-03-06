import { Component } from '@angular/core';
import { NavigationsComponent } from '../navigations/navigations.component';

@Component({
  selector: 'app-banner-section',
  standalone: true,
  imports: [NavigationsComponent],
  templateUrl: './banner-section.component.html',
  styleUrl: './banner-section.component.css'
})
export class BannerSectionComponent {
  bannerImageUrl: string = 'assets/images/banner-bg.jpg'
}
