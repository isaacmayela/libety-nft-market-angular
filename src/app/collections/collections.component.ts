import { Component } from '@angular/core';
import { CollectionsListComponent } from '../collections-list/collections-list.component';

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [CollectionsListComponent],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css'
})
export class CollectionsComponent {

}
