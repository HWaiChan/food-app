import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipes';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipeData: Recipe[] = [];

  constructor(private _recipeService: RecipeService, private router: Router) {
    this._recipeService.recipeData$.subscribe((data) => {
      this.recipeData = data;
    });
  }

  ngOnInit(): void {}

  export(): void {
    // Return some sort of .json
  }

  onDelete(recipe: Recipe): void {
    this._recipeService.deleteRecipe(recipe.name);
  }

  onSave(): void {
    this._recipeService.saveRecipes();
  }

  onEdit(recipe: Recipe): void {
    console.log('onEdit called');
    // Need to find a way to route to the create page but with the recipe object.
    // A recipe object is taken as an input in CreateRecipeComponent. But not sure if the Router can work with it.
    this.router.navigate(['recipe'], {
      queryParams: { name: recipe.name },
    });
  }
}
