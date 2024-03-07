import { Component } from '@angular/core';
import { NavigationsComponent } from '../navigations/navigations.component';
import { ExploreBannerComponent } from '../explore-banner/explore-banner.component';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [ExploreBannerComponent],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent {

}
