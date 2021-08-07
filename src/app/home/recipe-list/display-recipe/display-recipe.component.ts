import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipes';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'display-recipe',
  templateUrl: './display-recipe.component.html',
  styleUrls: ['./display-recipe.component.css'],
})
export class DisplayRecipeComponent implements OnInit {
  @Input()
  recipe: Recipe = { name: '', ingredients: [], servings: 1 };

  editedRecipe: Recipe = {
    name: '',
    ingredients: [],
    servings: 1,
  };
  constructor(_recipeService: RecipeService) {}

  ngOnInit(): void {}

  onSave(): void {}
}
