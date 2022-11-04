import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { Recipe } from '../recipe.module';
import * as RecipesActions from './recipe.actions';
import * as fromApp from '../../store/app.reducer';

@Injectable()
export class RecipeEffects {
  //   @Effect()
  //   fetchRecipes = this.actions$.pipe(
  //     ofType(RecipesActions.FETCH_RECIPES),
  //     switchMap(() => {
  //       return this.http.get<Recipe[]>(
  //         'https://ng-course-recipe-book-d8cfa-default-rtdb.firebaseio.com/recipes.json'
  //       );
  //     }),
  //     map((recipes) => {
  //       return recipes.map((recipe) => {
  //         return {
  //           ...recipe,
  //           ingredients: recipe.ingredients ? recipe.ingredients : [],
  //         };
  //       });
  //     }),
  //     map((recipes) => {
  //       return new RecipesActions.SetRecipes(recipes);
  //     })
  //   );

  @Effect()
  fetchRecipes = this.actions$.pipe(
    ofType(RecipesActions.FETCH_RECIPES),
    switchMap(() =>
      this.http.get<Recipe[]>(
        'https://ng-course-recipe-book-d8cfa-default-rtdb.firebaseio.com/recipes.json'
      )
    ),
    map(
      (recipes) =>
        new RecipesActions.SetRecipes(
          recipes
            ? recipes.map((recipe) => ({ ingredients: [], ...recipe }))
            : []
        )
    )
  );

  @Effect({ dispatch: false })
  storeRecipes = this.actions$.pipe(
    ofType(RecipesActions.STORE_RECIPES),
    withLatestFrom(this.store.select('recipes')),
    switchMap(([actionData, recipesState]) => {
      return this.http.put(
        'https://ng-course-recipe-book-d8cfa-default-rtdb.firebaseio.com/recipes.json',
        recipesState.recipes
      );
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
}
