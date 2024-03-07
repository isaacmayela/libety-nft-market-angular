import { Component } from '@angular/core';
import { ExploreBannerComponent } from '../explore-banner/explore-banner.component';
import { DiscoverComponent } from '../discover/discover.component';
import { SellerWeekComponent } from '../seller-week/seller-week.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [ExploreBannerComponent, DiscoverComponent, SellerWeekComponent, FooterComponent],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent {

}
