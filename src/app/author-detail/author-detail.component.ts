import { Component } from '@angular/core';
import { AuthorItemListComponent } from '../author-item-list/author-item-list.component';

@Component({
  selector: 'app-author-detail',
  standalone: true,
  imports: [AuthorItemListComponent],
  templateUrl: './author-detail.component.html',
  styleUrl: './author-detail.component.css'
})
export class AuthorDetailComponent {

}
