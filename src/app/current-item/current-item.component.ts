import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-current-item',
  standalone: true,
  imports: [],
  templateUrl: './current-item.component.html',
  styleUrl: './current-item.component.css'
})
export class CurrentItemComponent {
  @Input() data: any;
}
