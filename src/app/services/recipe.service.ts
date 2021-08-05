import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { BehaviorSubject } from 'rxjs';
import { Recipe } from '../interfaces/recipes';
import { recipeData } from './recipes.constant';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeDataSubject: BehaviorSubject<Recipe[]>;

  constructor(private _electronService: ElectronService) {
    this.recipeDataSubject = new BehaviorSubject(recipeData);
    this.loadRecipes();
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

  public loadRecipes(): void {
    if (this._electronService.isElectronApp) {
      // init from appdata or something
      this.loadRecipeFromFile();
    } else {
      // recipeData is hard coded, maybe later we retrieve it from somewhere
      this.recipeDataSubject = new BehaviorSubject(recipeData);
    }
  }

  public loadRecipeFromFile(): void {
    if (this._electronService.ipcRenderer) {
      this._electronService.ipcRenderer
        .invoke('loadRecipes')
        .then((recipes) => {
          if (recipes) {
            this.recipeDataSubject.next(recipes);
          } else {
            console.error("CAN'T FIND SHIT.");
            this.recipeDataSubject.next([]);
          }
        });
    } else {
      console.error('ipcRenderer is dumb');
    }
  }

  public saveRecipes(): void {
    console.log('Saving recipes');
    if (this._electronService.ipcRenderer) {
      this._electronService.ipcRenderer.invoke(
        'saveRecipes',
        this.recipeDataSubject.value
      );
    } else {
      console.error('ipcRenderer is dumb');
    }
  }
}
