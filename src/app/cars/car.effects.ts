import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CarsService } from "./cars.service";
import { addCar, addCarFailure, addCarSuccess, LoadCars, loadCarsFailure, loadCarsSuccess, removeCar, removeCarFailure, removeCarSuccess } from "./car.action";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class CarEffects {
    private actions$ = inject(Actions);
    private carService = inject(CarsService);

    loadCars$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoadCars),
            switchMap(() => this.carService.getCars().pipe(
                map((cars) => loadCarsSuccess({ cars })),
                catchError((err) => of(loadCarsFailure({ error: err })))
            )),
        )
    )
    addCar$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addCar),
            switchMap((res) => this.carService.addCar(res.car).pipe(
                map((car) => addCarSuccess({ car })),
                catchError((err) => of(addCarFailure({ error: err })))
            )),
        )
    )
    removeCar$ = createEffect(() =>
        this.actions$.pipe(
            ofType(removeCar),
            switchMap((res) => this.carService.removeCar(res.id).pipe(
                map(() => removeCarSuccess({ id: res.id })),
                catchError((err) => of(removeCarFailure({ error: err })))
            )),
        )
    )
}