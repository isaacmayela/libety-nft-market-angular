import { Component } from '@angular/core';
import { CurrentMarketListComponent } from '../current-market-list/current-market-list.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-current-market',
  standalone: true,
  imports: [NgClass, CurrentMarketListComponent],
  templateUrl: './current-market.component.html',
  styleUrl: './current-market.component.css'
})
export class CurrentMarketComponent {

  selectedTheme: string = 'all';

  selectType(theme: string) {
    this.selectedTheme = theme;
  }

}
