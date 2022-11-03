import { Recipe } from '../recipe.module';
import * as RecipesAction from './recipe.actions';

export interface State {
  recipes: Recipe[];
}

const initalState: State = {
  recipes: [],
};

export function recipeReducer(
  state = initalState,
  action: RecipesAction.RecipesActions
) {
  switch (action.type) {
    case RecipesAction.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload],
      };
    default:
      return state;
  }
}
