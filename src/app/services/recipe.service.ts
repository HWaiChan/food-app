import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipes';
import { recipeData } from './recipes.constant';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeData: Recipe[];

  constructor() {
    this.recipeData = recipeData;
  }

  public getRecipes(): Recipe[] {
    return this.recipeData;
  }

  public addRecipe(recipe: Recipe): void {
    this.recipeData.push(recipe);
  }
}
