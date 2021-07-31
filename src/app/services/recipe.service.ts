import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Recipe } from '../interfaces/recipes';
import { recipeData } from './recipes.constant';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeDataSubject: BehaviorSubject<Recipe[]>;

  constructor() {
    this.recipeDataSubject = new BehaviorSubject(recipeData);
  }

  get recipeData$() {
    return this.recipeDataSubject.asObservable();
  }

  public addRecipe(recipe: Recipe): void {
    let newData: Recipe[] = this.recipeDataSubject.value;
    newData.push(recipe);
    this.recipeDataSubject.next(newData);
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
    return this.recipeDataSubject.value.find((recipe) => {
      return recipe.name == recipeName;
    });
  }

  public deleteRecipe(recipeName: string): void {
    let recipeData = this.recipeDataSubject.value.filter(
      (recipe) => recipe.name !== recipeName
    );
    this.recipeDataSubject.next(recipeData);
  }
}
