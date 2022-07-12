import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simply test',
      'https://www.delicious.com.au/recipes/chicken-chickpea-coconut-curry-recipe/s7g4id37?r=recipes/collections/i66gak0q'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
