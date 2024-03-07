import { Component } from '@angular/core';
import { ExploreBannerComponent } from '../explore-banner/explore-banner.component';
import { DiscoverComponent } from '../discover/discover.component';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [ExploreBannerComponent, DiscoverComponent],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent {

}
