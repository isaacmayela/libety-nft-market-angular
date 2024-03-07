import { Component, Input } from '@angular/core';
import { CurrentItemComponent } from '../current-item/current-item.component';
import { NgFor, NgClass } from '@angular/common';
import CurrentMarketItems from '../../data/data';

@Component({
  selector: 'app-current-market-list',
  standalone: true,
  imports: [NgFor, NgClass, CurrentItemComponent],
  templateUrl: './current-market-list.component.html',
  styleUrl: './current-market-list.component.css'
})
export class CurrentMarketListComponent {

  @Input() theme: string = "all";

  items = CurrentMarketItems.getCurrentMarket()

  get filteredList() {
    if (this.theme === 'all') {
      return this.items;
    }else if (this.theme === "MusicArt") {
      return this.items.filter(item => item.theme === "MusicArt");
    }else if (this.theme === "DigitalArt") {
      return this.items.filter(item => item.theme === "DigitalArt");
    }else if (this.theme === "blockChaine") {
      return this.items.filter(item => item.theme === "blockChaine");
    }else if (this.theme === "virtual") {
      return this.items.filter(item => item.theme === "virtual");
    }
    const isAll = this.theme === 'all';
    return this.items
  }

}
