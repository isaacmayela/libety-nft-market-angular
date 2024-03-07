import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-current-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './current-item.component.html',
  styleUrl: './current-item.component.css'
})
export class CurrentItemComponent {
  @Input() data: any;
}
