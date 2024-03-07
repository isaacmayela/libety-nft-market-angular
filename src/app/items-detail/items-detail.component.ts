import { Component } from '@angular/core';
import { NavigationsComponent } from '../navigations/navigations.component';
import { DetailsBannerComponent } from '../details-banner/details-banner.component';

@Component({
  selector: 'app-items-detail',
  standalone: true,
  imports: [NavigationsComponent, DetailsBannerComponent],
  templateUrl: './items-detail.component.html',
  styleUrl: './items-detail.component.css'
})
export class ItemsDetailComponent {

}
