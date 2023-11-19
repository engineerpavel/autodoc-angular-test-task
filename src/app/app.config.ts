import { ApplicationConfig, importProvidersFrom, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

export const BASE_API_URL = new InjectionToken('BASE_API_URL');

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: BASE_API_URL, useValue: environment.apiUrl },
    provideRouter(routes),
    importProvidersFrom(HttpClientModule)
  ]
};
