import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { HomeComponentComponent } from './home-component/home-component.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
