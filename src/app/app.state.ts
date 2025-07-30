import { CarState } from "./cars/car.reducer";

export interface AppState {
    readonly cars: CarState;
}
