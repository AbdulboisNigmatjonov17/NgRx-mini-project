import { createAction, props } from "@ngrx/store";
import { Car } from "../models/car";

export const LoadCars = createAction('[Car] Load Cars');
export const loadCarsSuccess = createAction('[Car] Load Cars Success', props<{ cars: Car[] }>());
export const loadCarsFailure = createAction('[Car] Load Cars Failure', props<{ error: any }>());

// export const AddCar = createAction('[Car] Add Car', props<Car>());
// export const RemoveCar = createAction('[Car] Remove Car', props<{ id: string }>());

export const addCar = createAction('[Car] Add Car', props<{ car: Car }>());
export const addCarSuccess = createAction('[Car] Add Car Success', props<{ car: Car }>());
export const addCarFailure = createAction('[Car] Add Car Failure', props<{ error: any }>());

export const removeCar = createAction('[Car] Remove Car', props<{ id: string }>());
export const removeCarSuccess = createAction('[Car] Remove Car Success', props<{ id: string }>());
export const removeCarFailure = createAction('[Car] Remove Car Failure', props<{ error: any }>());