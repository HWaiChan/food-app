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

  public getIngredients(recipeNames: string[]): string[] {
    let ingredientList: string[] = [];

    recipeNames
      .map((name) => {
        return this.getRecipe(name);
      })
      .filter((recipe) => {
        return recipe != undefined;
      })
      .map((recipe) => {
        return recipe?.ingredients;
      })
      .forEach((list) => {
        if (!!list) {
          ingredientList = ingredientList.concat(list);
        }
      });
    return ingredientList;
  }

  public getRecipe(recipeName: string): Recipe | undefined {
    return this.recipeData.find((recipe) => {
      return recipe.name == recipeName;
    });
  }

  public deleteRecipe(recipeName: string): void {
    this.recipeData = this.recipeData.filter(
      (recipe) => recipe.name !== recipeName
    );
  }
}
