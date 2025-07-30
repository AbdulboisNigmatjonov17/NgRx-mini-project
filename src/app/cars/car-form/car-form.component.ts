import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectCars } from '../car.selector';
import { Car } from '../../models/car';
import { AddCar } from '../car.action';

@Component({
  selector: 'app-car-form',
  imports: [ReactiveFormsModule],
  templateUrl: './car-form.component.html',
  styleUrl: './car-form.component.css'
})
export class CarFormComponent {
  private store = inject(Store)
  
  cars = this.store.selectSignal(selectCars);

  carForm = new FormGroup({
    brand: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    previewImage: new FormControl('', Validators.required)
  });

  onSubmit() {
    if (this.carForm.valid) {
      const formValue = this.carForm.value
      const newCar: Car = {
        id: crypto.randomUUID(),
        brand: formValue.brand!,
        model: formValue.model!,
        price: +formValue.price!,
        prviewImage: formValue.previewImage!
      }
      this.store.dispatch(AddCar(newCar));
      this.carForm.reset();
    }
  }
}
