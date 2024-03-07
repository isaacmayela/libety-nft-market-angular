import { Component } from '@angular/core';
import { DetailsBannerComponent } from '../details-banner/details-banner.component';
import { FooterComponent } from '../footer/footer.component';
import { DetailsContainerComponent } from '../details-container/details-container.component';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-items-detail',
  standalone: true,
  imports: [DetailsBannerComponent, FooterComponent, DetailsContainerComponent, CreateComponent],
  templateUrl: './items-detail.component.html',
  styleUrl: './items-detail.component.css'
})
export class ItemsDetailComponent {

}
