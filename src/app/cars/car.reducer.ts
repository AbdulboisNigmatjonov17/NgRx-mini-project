import { createReducer, on } from "@ngrx/store";
import { Car } from "../models/car";
import { AddCar, LoadCars, loadCarsFailure, loadCarsSuccess, RemoveCar } from "./car.action";

export interface CarState {
    cars: Car[];
    loading: boolean;
    error: any;
}

export const initialState: CarState = {
    cars: [],
    loading: false,
    error: null
};

export const CarReducer = createReducer(initialState, on(LoadCars, (state) => ({ ...state, loading: true, error: null })),
    on(loadCarsSuccess, (state, action) => ({ ...state, loading: false, cars: action.cars })),
    on(loadCarsFailure, (state, action) => ({ ...state, loading: false, error: action.error })),
)