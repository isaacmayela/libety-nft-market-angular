import { Component } from '@angular/core';
import { DiscoverListComponent } from '../discover-list/discover-list.component';

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [DiscoverListComponent],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.css'
})
export class DiscoverComponent {

}
