import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularHelpComponent } from './angular-help/angular-help.component';
import { HomeComponent } from './home/home.component';
import { CreateRecipeComponent } from './home/recipe-list/create-recipe/create-recipe.component';
import { MealPlanComponent } from './meal-plan/meal-plan.component';

const routes: Routes = [
  { path: 'help', component: AngularHelpComponent },
  { path: 'create-recipe', component: CreateRecipeComponent },
  { path: 'meal-plan', component: MealPlanComponent },
  { path: '**', component: HomeComponent },
  { path: '', redirectTo: '**', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
