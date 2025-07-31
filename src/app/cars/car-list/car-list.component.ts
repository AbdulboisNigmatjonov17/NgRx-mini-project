import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCars, selectError, selectLoading } from '../car.selector';
import { CurrencyPipe } from '@angular/common';
import { LoadCars, RemoveCar } from '../car.action';

@Component({
  selector: 'app-car-list',
  imports: [CurrencyPipe],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent implements OnInit{
  private store = inject(Store)

  cars = this.store.selectSignal(selectCars)
  loading = this.store.selectSignal(selectLoading)
  error = this.store.selectSignal(selectError)

  ngOnInit(): void {
    this.store.dispatch(LoadCars())
  }
}
// private store = inject(Store)

// cars = this.store.selectSignal(selectCars)

// onDelete(cardId: string) {
//   this.store.dispatch(RemoveCar({ id: cardId }))
// }
