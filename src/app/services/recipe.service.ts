import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipes';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeData: Recipe[] = [
    { name: 'wow', cuisine: 'Indian' },
    { name: '123', cuisine: 'Italian' },
  ];
  constructor() {}

  public getRecipes(): Recipe[] {
    return this.recipeData;
  }

  public addRecipe(recipe: Recipe): void {
    this.recipeData.push(recipe);
  }
}
