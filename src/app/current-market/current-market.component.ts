import { Component } from '@angular/core';
import { CurrentMarketListComponent } from '../current-market-list/current-market-list.component';

@Component({
  selector: 'app-current-market',
  standalone: true,
  imports: [CurrentMarketListComponent],
  templateUrl: './current-market.component.html',
  styleUrl: './current-market.component.css'
})
export class CurrentMarketComponent {

}
