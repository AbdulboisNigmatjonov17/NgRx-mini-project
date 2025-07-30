import { createReducer, on } from "@ngrx/store";
import { Car } from "../models/car";
import { AddCar, RemoveCar } from "./car.action";

export const initialState: Car[] = [];

export const CarReducer = createReducer(
    initialState,
    on(AddCar, (state, {brand, model, id, price, prviewImage}) => [...state, { brand, model, id, price, prviewImage }]),
    on(RemoveCar, (state, action) => state.filter(car => car.id !== action.id))
)