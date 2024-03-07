import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, } from '@angular/router';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigations',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './navigations.component.html',
  styleUrl: './navigations.component.css'
})
export class NavigationsComponent {

  // isActive(url: string): boolean {
  //   return this.router.url === url;
  // }
}
