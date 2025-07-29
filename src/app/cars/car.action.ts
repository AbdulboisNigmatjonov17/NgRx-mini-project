import { createAction, props } from "@ngrx/store";
import { Car } from "../models/car";

export const AddCar = createAction('[Car] Add Car', props<Car>());
export const RemoveCar = createAction('[Car] Remove Car', props<{ id: string }>());