import { Component } from '@angular/core';
import { BannerSectionComponent } from '../banner-section/banner-section.component';
import { CategoriesSectionComponent } from '../categories-section/categories-section.component';
import { CreateComponent } from '../create/create.component';
import { CurrentMarketComponent } from '../current-market/current-market.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [BannerSectionComponent, CategoriesSectionComponent, CreateComponent, CurrentMarketComponent, FooterComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {
  title: string = "Bonjour tout le monde !"
}
