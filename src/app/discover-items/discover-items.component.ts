import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, } from '@angular/router';

@Component({
  selector: 'app-discover-items',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './discover-items.component.html',
  styleUrl: './discover-items.component.css'
})
export class DiscoverItemsComponent {
  @Input() data:any
}
