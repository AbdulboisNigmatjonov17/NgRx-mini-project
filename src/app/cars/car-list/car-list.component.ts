import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCars } from '../car.selector';
import { CurrencyPipe } from '@angular/common';
import { RemoveCar } from '../car.action';

@Component({
  selector: 'app-car-list',
  imports: [CurrencyPipe],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {
  private store = inject(Store)

  cars = this.store.selectSignal(selectCars)

  onDelete(cardId: string) {
    this.store.dispatch(RemoveCar({ id: cardId }))
  }
}
