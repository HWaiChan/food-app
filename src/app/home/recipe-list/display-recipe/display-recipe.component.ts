import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipes';

@Component({
  selector: 'display-recipe',
  templateUrl: './display-recipe.component.html',
  styleUrls: ['./display-recipe.component.css'],
})
export class DisplayRecipeComponent implements OnInit {
  @Input()
  recipe: Recipe = { name: '', cuisine: '', ingredients: [], servings: 1 };
  constructor() {}

  ngOnInit(): void {}
}
