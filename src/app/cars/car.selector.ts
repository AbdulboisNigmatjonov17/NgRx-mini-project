import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CarState } from "./car.reducer";

export const selectCarState = createFeatureSelector<CarState>('cars');

export const selectCars = createSelector(selectCarState, (state) => state.cars);
export const selectLoading = createSelector(selectCarState, (state) => state.loading);
export const selectError = createSelector(selectCarState, (state) => state.error);