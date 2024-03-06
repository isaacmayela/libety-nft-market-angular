import { Component } from '@angular/core';
import { CategoriesItemsComponent } from '../categories-items/categories-items.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [NgFor, CategoriesItemsComponent],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.css',
})
export class CategoriesListComponent {
  items = [
    { id:1, source: "assets/images/icon-01.png", description: 'Blockchaine' },
    { id:2, source: "assets/images/icon-02.png", description: 'Digital Art' },
    { id:3, source: "assets/images/icon-03.png", description: 'Musique Art' },
    { id:4, source: "assets/images/icon-04.png", description: 'Visual World' },
    { id:5, source: "assets/images/icon-05.png", description: 'Valuable' },
    { id:6, source: "assets/images/icon-06.png", description: 'Triple NFT' }
  ];
}
