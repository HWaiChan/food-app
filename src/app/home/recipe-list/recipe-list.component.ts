import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipes';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipeData: Recipe[] = [];
  constructor(_recipeService: RecipeService) {
    this.recipeData = _recipeService.getRecipes();
  }

  ngOnInit(): void {}

  createRecipe(): void {}
}
