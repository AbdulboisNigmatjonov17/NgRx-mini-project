import { removeCar } from './car.action';
import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { delay, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private mockData: Car[] = [
    {
      id: '1',
      brand: 'Toyota',
      model: 'Corolla',
      prviewImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAQZCKvfNz_0yKuSDZh-GzRQ0gl6fJ8J8hIg&s',
      price: 20000
    },
    {
      id: '2',
      brand: 'Honda',
      model: 'Civic',
      prviewImage: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2026/civic-sedan/non-VLP/10-Family/MY26_Civic_Family_Card_Jelly_Hybrid_2x.jpg?sc_lang=en',
      price: 25000
    }
  ]
  getCars() {
    //  return throwError(() => new Error('Api is not working at the moment')).pipe(delay(1000));
    return of(this.mockData).pipe(delay(1000));
  }
  addCar(car: Car) {
    return of(car).pipe(delay(1000));
  }

  removeCar(cardId: string) {
    return of(null).pipe(delay(1000));
  }
}
