import { Component, Input, OnInit, Optional } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Recipe } from 'src/app/interfaces/recipes';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  myControl = new FormControl();

  @Input() recipes: Recipe[] = [];

  filteredRecipes: Observable<any[]> = new Observable<any[]>();

  constructor() {
    this.filteredRecipes = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => value.name),
      map(name => name ? this._filter(name) : this.recipes.slice())
    );
  }

  ngOnInit() {
  }

  displayFn(user: Recipe): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): Recipe[] {
    const filterValue = name.toLowerCase();
    console.log(this.recipes.filter(recipe => recipe.name.toLowerCase().includes(filterValue)));
    return this.recipes.filter(recipe => recipe.name.toLowerCase().includes(filterValue));
  }
}


