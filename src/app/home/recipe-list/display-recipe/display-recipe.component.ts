import { Component, Input, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Recipe } from 'src/app/interfaces/recipes';
import { RecipeService } from 'src/app/services/recipe.service';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'display-recipe',
  templateUrl: './display-recipe.component.html',
  styleUrls: ['./display-recipe.component.css'],
})
export class DisplayRecipeComponent implements OnInit {
  @Input()
  recipe: Recipe = { name: '', ingredients: [], servings: 1 };
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  selectable = true;
  removable = true;
  addOnBlur = true;

  editedRecipe: Recipe = {
    name: '',
    ingredients: [],
    servings: 1,
  };
  constructor(_recipeService: RecipeService) {}

  ngOnInit(): void {}

  onSave(): void {}

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.recipe.ingredients.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }
}
