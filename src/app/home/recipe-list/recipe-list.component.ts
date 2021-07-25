import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipes';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipeData: Recipe[] = [];
  constructor(private _recipeService: RecipeService) {
    this.recipeData = this._recipeService.getRecipes();
  }

  ngOnInit(): void {}

  createRecipe(): void {}

  // TODO: Can't I do some Subscriptions and Subjects?
  onDelete(recipe: Recipe): void {
    this._recipeService.deleteRecipe(recipe.name);
    this.recipeData = this._recipeService.getRecipes();
  }
}
