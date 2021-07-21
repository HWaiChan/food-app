import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/interfaces/recipes';
import {
  FormArray,
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
  form: FormGroup;
  items: FormArray;
  constructor(private _recipeServie: RecipeService, private fb: FormBuilder) {
    this.items = this.fb.array([new FormControl()]);
    this.form = this.fb.group({
      name: ['', Validators.required],
      cuisine: ['', Validators.required],
      ingredients: this.fb.array([new FormControl()]),
      servings: [0, Validators.required],
    });
  }

  ngOnInit(): void {}

  createRecipe(recipe: Recipe): void {
    this._recipeServie.addRecipe(recipe);
  }

  onSubmit(): void {
    const filteredInt: string[] = this.ingredients.controls
      .filter((formcontrol) => {
        return !!formcontrol.value;
      })
      .map((frmContrl) => {
        return frmContrl.value;
      });

    const recipe: Recipe = {
      name: this.form.get('name')?.value,
      cuisine: this.form.get('cuisine')?.value,
      ingredients: filteredInt,
      servings: this.form.get('servings')?.value,
    };

    this.createRecipe(recipe);
  }

  get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  addItem(): void {
    this.items = this.form.get('ingredients') as FormArray;
    this.items.push(new FormControl());
  }
  createItem(): FormGroup {
    return this.fb.group({
      name: '',
    });
  }
}
