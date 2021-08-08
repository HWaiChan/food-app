import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AngularHelpComponent } from './angular-help/angular-help.component';
import { HomeComponent } from './home/home.component';
import { TopNavbarComponent } from './home/top-navbar/top-navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatGridListModule } from '@angular/material/grid-list';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';

import { RecipeListComponent } from './home/recipe-list/recipe-list.component';
import { SearchComponent } from './home/recipe-list/search/search.component';
import { CreateRecipeComponent } from './home/recipe-list/create-recipe/create-recipe.component';
import { MealPlanComponent } from './meal-plan/meal-plan.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ExportMealPlanComponent } from './meal-plan/export-meal-plan/export-meal-plan.component';
import { SaveAsTxtComponent } from './meal-plan/export-meal-plan/save-as-txt/save-as-txt.component';
import { DisplayRecipeComponent } from './home/recipe-list/display-recipe/display-recipe.component';
import { NgxElectronModule } from 'ngx-electron';

@NgModule({
  declarations: [
    AppComponent,
    AngularHelpComponent,
    HomeComponent,
    TopNavbarComponent,
    RecipeListComponent,
    SearchComponent,
    CreateRecipeComponent,
    MealPlanComponent,
    ExportMealPlanComponent,
    SaveAsTxtComponent,
    DisplayRecipeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    DragDropModule,
    MatGridListModule,
    FlexLayoutModule,
    ClipboardModule,
    MatDialogModule,
    MatTableModule,
    MatExpansionModule,
    NgxElectronModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
