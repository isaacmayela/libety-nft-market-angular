import { Component } from '@angular/core';
import { NavigationsComponent } from '../navigations/navigations.component';

@Component({
  selector: 'app-items-detail',
  standalone: true,
  imports: [NavigationsComponent],
  templateUrl: './items-detail.component.html',
  styleUrl: './items-detail.component.css'
})
export class ItemsDetailComponent {

}
