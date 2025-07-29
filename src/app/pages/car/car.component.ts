import { Component } from '@angular/core';
import { CarListComponent } from '../../cars/car-list/car-list.component';
import { CarFormComponent } from '../../cars/car-form/car-form.component';

@Component({
  selector: 'app-car',
  imports: [CarListComponent, CarFormComponent],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {

}
