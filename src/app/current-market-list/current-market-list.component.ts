import { Component } from '@angular/core';
import { CurrentItemComponent } from '../current-item/current-item.component';
import { NgFor } from '@angular/common';
import CurrentMarketItems from '../../data/data';

@Component({
  selector: 'app-current-market-list',
  standalone: true,
  imports: [NgFor, CurrentItemComponent],
  templateUrl: './current-market-list.component.html',
  styleUrl: './current-market-list.component.css'
})
export class CurrentMarketListComponent {
  items = CurrentMarketItems.getCurrentMarket()
}
