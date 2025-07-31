import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CarsService } from "./cars.service";
import { LoadCars, loadCarsFailure, loadCarsSuccess } from "./car.action";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class CarEffects {
    private actions$ = inject(Actions);
    private carService = inject(CarsService);

    loadCars$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoadCars),
            switchMap((_) => this.carService.getCars().pipe(
                map((cars) => loadCarsSuccess({ cars })),
                catchError((err) => of(loadCarsFailure({ error: err })))
            )),
        )
    )
}