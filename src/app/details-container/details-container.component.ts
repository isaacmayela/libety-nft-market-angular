import { Component } from '@angular/core';
import { BidingPriceComponent } from '../biding-price/biding-price.component';

@Component({
  selector: 'app-details-container',
  standalone: true,
  imports: [BidingPriceComponent],
  templateUrl: './details-container.component.html',
  styleUrl: './details-container.component.css'
})
export class DetailsContainerComponent {

}
