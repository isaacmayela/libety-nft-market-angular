import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-categories-items',
  standalone: true,
  imports: [],
  templateUrl: './categories-items.component.html',
  styleUrl: './categories-items.component.css'
})
export class CategoriesItemsComponent {
  @Input() data: any;
}
