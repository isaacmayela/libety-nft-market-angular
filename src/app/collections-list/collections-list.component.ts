import { Component } from '@angular/core';
import { CollectionsItemsComponent } from '../collections-items/collections-items.component';
import { NgFor } from '@angular/common';
import UsefulFeatures from '../../utils/usefulFeatures';


@Component({
  selector: 'app-collections-list',
  standalone: true,
  imports: [NgFor, CollectionsItemsComponent],
  templateUrl: './collections-list.component.html',
  styleUrl: './collections-list.component.css'
})
export class CollectionsListComponent {
  items = UsefulFeatures.collectionsItemsElements()
}
