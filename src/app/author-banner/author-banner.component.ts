import { Component } from '@angular/core';
import { NavigationsComponent } from '../navigations/navigations.component';

@Component({
  selector: 'app-author-banner',
  standalone: true,
  imports: [NavigationsComponent],
  templateUrl: './author-banner.component.html',
  styleUrl: './author-banner.component.css'
})
export class AuthorBannerComponent {

}
