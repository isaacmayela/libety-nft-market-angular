import { Component } from '@angular/core';
import { CategoriesComponent } from '../categories/categories.component';
import { CollectionsComponent } from '../collections/collections.component';

@Component({
  selector: 'app-categories-section',
  standalone: true,
  imports: [CategoriesComponent, CollectionsComponent],
  templateUrl: './categories-section.component.html',
  styleUrl: './categories-section.component.css'
})
export class CategoriesSectionComponent {

}
