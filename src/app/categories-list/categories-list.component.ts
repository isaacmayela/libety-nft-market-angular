import { Component } from '@angular/core';
import { CategoriesItemsComponent } from '../categories-items/categories-items.component';
import UsefulFeatures from '../../utils/usefulFeatures';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [NgFor, CategoriesItemsComponent],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.css',
})
export class CategoriesListComponent {
  items = UsefulFeatures.categoriesItemsElements();
}
