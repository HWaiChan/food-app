import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/interfaces/recipes';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css'],
})
export class CreateRecipeComponent implements OnInit {
  form: FormGroup;
  items: FormArray;
  constructor(
    private _recipeServie: RecipeService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.items = this.fb.array([new FormControl()]);
    this.form = this.fb.group({
      name: ['', Validators.required],
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
      .filter((fmCtrl) => {
        return !!fmCtrl.value;
      })
      .map((fmCtrl) => {
        return fmCtrl.value;
      });

    const recipe: Recipe = {
      name: this.form.get('name')?.value,
      ingredients: filteredInt,
      servings: this.form.get('servings')?.value,
    };

    this.createRecipe(recipe);
    this.router.navigate(['recipes']);
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
