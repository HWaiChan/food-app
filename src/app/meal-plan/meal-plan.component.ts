import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { RecipeService } from '../services/recipe.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-meal-plan',
  templateUrl: './meal-plan.component.html',
  styleUrls: ['./meal-plan.component.css'],
})
export class MealPlanComponent implements OnInit {
  recipes: string[] = [];
  displayList: string = '';
  weekPlanMap: Map<string, string[]> = new Map();
  constructor(private _recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this._recipeService.getRecipes().map((ele) => ele.name);
    this.weekPlanMap.set('Monday', []);
    this.weekPlanMap.set('Tuesday', []);
    this.weekPlanMap.set('Wednesday', []);
    this.weekPlanMap.set('Thursday', []);
    this.weekPlanMap.set('Friday', []);
    this.weekPlanMap.set('Saturday', []);
    this.weekPlanMap.set('Sunday', []);
  }

  getIngredientList(): string[] {
    let ingredientsList: string[] = [];
    for (let dumb of this.weekPlanMap.values()) {
      if (dumb.length > 0) {
        let list: string[] = this._recipeService.getIngredients(dumb);
        ingredientsList = ingredientsList.concat(list);
      }
    }
    console.log('Total List', ingredientsList);

    return ingredientsList;
  }

  stringifyList(map: Map<string, number>): string {
    let jsonObject: object = Object.fromEntries(map);
    return JSON.stringify(jsonObject);
  }
  getGroceryList(): void {
    let ingredientsList: string[] = [];
    let map: Map<string, number>;
    ingredientsList = this.getIngredientList();
    map = ingredientsList.reduce(
      (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
      new Map()
    );
    console.log(map);

    this.displayList = this.stringifyList(map);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      if (event.previousContainer.id === 'recipeBank') {
        copyArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
      } else if (event.container.id === 'recipeBank') {
        transferArrayItem(
          event.previousContainer.data,
          [],
          event.previousIndex,
          event.currentIndex
        );
      } else {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
      }
    }
  }

  asIsOrder(a: any, b: any) {
    return 1;
  }
}
