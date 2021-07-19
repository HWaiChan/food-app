import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipes';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipeData : Recipe[] = [{name: "wow"}, {name:"123"}];
  constructor() { }

  ngOnInit(): void {
  }

}
