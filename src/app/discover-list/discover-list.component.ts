import { Component } from '@angular/core';
import { DiscoverItemsComponent } from '../discover-items/discover-items.component';
import CurrentMarketItems from '../../data/data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-discover-list',
  standalone: true,
  imports: [NgFor, DiscoverItemsComponent],
  templateUrl: './discover-list.component.html',
  styleUrl: './discover-list.component.css'
})
export class DiscoverListComponent {
  items = CurrentMarketItems.getDiscoverDates()
}
