import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-meal-plan',
  templateUrl: './meal-plan.component.html',
  styleUrls: ['./meal-plan.component.css'],
})
export class MealPlanComponent implements OnInit {
  recipes: string[] = [];

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

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
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

  asIsOrder(a: any, b: any) {
    return 1;
  }
}
