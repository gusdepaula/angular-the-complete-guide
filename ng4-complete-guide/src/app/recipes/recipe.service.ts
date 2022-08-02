import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.module';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simply test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'
    ),
    new Recipe(
      'Second test recipe',
      'This is a simply test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
