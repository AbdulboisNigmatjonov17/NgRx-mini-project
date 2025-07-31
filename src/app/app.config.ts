import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { CarReducer } from './cars/car.reducer';
import { AppState } from './app.state';
import { provideEffects } from '@ngrx/effects';
import { CarEffects } from './cars/car.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideStore<AppState>({ cars: CarReducer }), provideEffects(CarEffects)]
};
