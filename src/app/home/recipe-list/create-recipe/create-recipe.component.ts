import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/interfaces/recipes';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css'],
})
export class CreateRecipeComponent implements OnInit {
  form = this.fb.group({
    name: ['', Validators.required],
    cuisine: ['', Validators.required],
  });
  constructor(private _recipeServie: RecipeService, private fb: FormBuilder) {}

  ngOnInit(): void {}

  createRecipe(recipe: Recipe): void {
    console.log(recipe);
  }

  onSubmit(): void {
    const recipe: Recipe = {
      name: this.form.get('name')?.value,
      cuisine: this.form.get('cuisine')?.value,
    };
    this.createRecipe(recipe);
  }
}
