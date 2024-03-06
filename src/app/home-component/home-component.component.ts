import { Component } from '@angular/core';
import { BannerSectionComponent } from '../banner-section/banner-section.component';
import { CategoriesSectionComponent } from '../categories-section/categories-section.component';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [BannerSectionComponent, CategoriesSectionComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {
  title: string = "Bonjour tout le monde !"
}
