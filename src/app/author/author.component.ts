import { Component } from '@angular/core';
import { AuthorBannerComponent } from '../author-banner/author-banner.component';
import { FooterComponent } from '../footer/footer.component';
import { CreateComponent } from '../create/create.component';
import { AuthorDetailComponent } from '../author-detail/author-detail.component';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [AuthorBannerComponent, AuthorDetailComponent, CreateComponent, FooterComponent],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {

}
