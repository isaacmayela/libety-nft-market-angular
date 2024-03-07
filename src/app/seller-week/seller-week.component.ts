import { Component } from '@angular/core';
import { SellerWeekListComponent } from '../seller-week-list/seller-week-list.component';

@Component({
  selector: 'app-seller-week',
  standalone: true,
  imports: [SellerWeekListComponent],
  templateUrl: './seller-week.component.html',
  styleUrl: './seller-week.component.css'
})
export class SellerWeekComponent {

}
