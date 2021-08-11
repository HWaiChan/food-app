import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { FormControl } from '@angular/forms';
import { RecipeService } from '../services/recipe.service';
import { MatDialog } from '@angular/material/dialog';
import { ExportMealPlanComponent } from './export-meal-plan/export-meal-plan.component';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-meal-plan',
  templateUrl: './meal-plan.component.html',
  styleUrls: ['./meal-plan.component.css'],
})
export class MealPlanComponent implements OnInit {
  searchControl = new FormControl();
  searchFilteredRecipes: Observable<string[]>;

  recipes: string[] = [];
  displayList: string = '';
  weekPlanMap: Map<string, string[]> = new Map();
  constructor(
    private _recipeService: RecipeService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._recipeService.recipeData$.subscribe((data) => {
      this.recipes = data.map((ele) => ele.name);
    });
    this.weekPlanMap.set('Monday', []);
    this.weekPlanMap.set('Tuesday', []);
    this.weekPlanMap.set('Wednesday', []);
    this.weekPlanMap.set('Thursday', []);
    this.weekPlanMap.set('Friday', []);
    this.weekPlanMap.set('Saturday', []);
    this.weekPlanMap.set('Sunday', []);

    this.searchFilteredRecipes = this.searchControl.valueChanges.pipe(
      startWith(''),
      map((value: string) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.recipes.filter((recipe) =>
      recipe.toLowerCase().includes(filterValue)
    );
  }

  openDialog(): void {
    this.dialog.open(ExportMealPlanComponent, {
      data: {
        list: this.displayList,
      },
    });
  }

  getIngredientList(): string[] {
    let ingredientsList: string[] = [];
    for (let dumb of this.weekPlanMap.values()) {
      if (dumb.length > 0) {
        let list: string[] = this._recipeService.getIngredients(dumb);
        ingredientsList = ingredientsList.concat(list);
      }
    }
    return ingredientsList;
  }

  stringifyList(map: Map<string, number>): string {
    let jsonObject: object = Object.fromEntries(map);
    return JSON.stringify(jsonObject, null, 4)
      .replaceAll('"', '')
      .replace(/[{}]/g, '');
  }

  updateGroceryList(): void {
    let ingredientsList: string[] = [];
    let countedMap: Map<string, number>;
    ingredientsList = this.getIngredientList();
    countedMap = ingredientsList.reduce(
      (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
      new Map()
    );
    this.displayList = this.stringifyList(countedMap);
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
        this.updateGroceryList();
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
        this.updateGroceryList();
      }
    }
  }

  asIsOrder(a: any, b: any) {
    return 1;
  }
}
