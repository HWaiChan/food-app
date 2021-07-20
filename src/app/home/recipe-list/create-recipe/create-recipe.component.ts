import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/interfaces/recipes';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css'],
})
export class CreateRecipeComponent implements OnInit {
  constructor(private _recipeServie: RecipeService) {}

  ngOnInit(): void {}

  createRecipe(recipe: Recipe): void {
    console.log(recipe);
  }
}
