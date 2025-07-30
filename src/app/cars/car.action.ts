import { createAction, props } from "@ngrx/store";
import { Car } from "../models/car";

export const LoadCars = createAction('[Car] Load Cars');
export const loadCarsSuccess = createAction('[Car] Load Cars Success', props<{ cars: Car[] }>());
export const loadCarsFailure = createAction('[Car] Load Cars Failure', props<{ error: any }>());

export const AddCar = createAction('[Car] Add Car', props<Car>());
export const RemoveCar = createAction('[Car] Remove Car', props<{ id: string }>());