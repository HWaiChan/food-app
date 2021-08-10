import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
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
  // If its undefined, we are in the edit flow.
  recipe: Recipe | undefined;

  constructor(
    private _recipeServie: RecipeService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: [{ value: '', disabled: false }, Validators.required],
      ingredients: this.fb.array([new FormControl()]),
      servings: [0, Validators.required],
    });
    this.route.queryParams.subscribe((params) => {
      if (params['name']) {
        this.recipe = this._recipeServie.getRecipe(params['name']);
        if (this.recipe) this.refillRecipeForm(this.recipe);
      }
    });
  }

  refillRecipeForm(recipe: Recipe): void {
    this.form.patchValue({
      name: recipe.name,
      servings: recipe.servings,
    });
    this.form.setControl(
      'ingredients',
      this.fb.array(recipe.ingredients || [])
    );
    this.form.controls['name']?.disable();
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

  addNewItem(): void {
    let items = this.form.get('ingredients') as FormArray;
    items.push(new FormControl());
  }

  addItem(string: string): void {
    let items = this.form.get('ingredients') as FormArray;
    const item = new FormControl();
    item.setValue(string);
    items.push(item);
  }
  createItem(): FormGroup {
    return this.fb.group({
      name: '',
    });
  }
}
