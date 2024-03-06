import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collections-items',
  standalone: true,
  imports: [],
  templateUrl: './collections-items.component.html',
  styleUrl: './collections-items.component.css'
})
export class CollectionsItemsComponent {
  @Input() data: any;
}
