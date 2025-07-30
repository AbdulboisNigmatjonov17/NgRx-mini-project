import { createFeatureSelector } from "@ngrx/store";
import { Car } from "../models/car";

export const selectCars = createFeatureSelector<Car[]>('car');