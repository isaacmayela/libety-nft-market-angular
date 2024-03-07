import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ExploreComponent } from './explore/explore.component';
import { ItemsDetailComponent } from './items-detail/items-detail.component';


export const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'items-details', component: ItemsDetailComponent },
];
