import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import CurrentMarketItems from '../../data/data';

@Component({
  selector: 'app-seller-week-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './seller-week-list.component.html',
  styleUrl: './seller-week-list.component.css'
})
export class SellerWeekListComponent {
  items = CurrentMarketItems.getTopSellers()
}
