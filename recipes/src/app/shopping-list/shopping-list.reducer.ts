import { Action } from '@ngrx/store';
import { Ingredient } from '../shared/ingredient.module';

const initialState = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomates', 10)],
};

export function shoppingListReducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return {
        ...state,
        ingredients: [...state.ingredients, action],
      };
  }
}
