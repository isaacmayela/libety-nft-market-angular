import { Component } from '@angular/core';
import { DiscoverItemsComponent } from '../discover-items/discover-items.component';
import { NgFor } from '@angular/common';
import CurrentMarketItems from '../../data/data';

@Component({
  selector: 'app-author-item-list',
  standalone: true,
  imports: [NgFor, DiscoverItemsComponent],
  templateUrl: './author-item-list.component.html',
  styleUrl: './author-item-list.component.css'
})
export class AuthorItemListComponent {
  datas = CurrentMarketItems.getDiscoverDates()
  items = this.datas.splice(0,4)
}
