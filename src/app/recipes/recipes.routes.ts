import { Routes } from "@angular/router";
import { RecipeStartComponent } from "app/recipes/recipe-start.component";
import { RecipeDetailComponent } from "app/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "app/recipes/recipe-edit/recipe-edit.component";

export const RECIPE_ROUTES: Routes = [
    {path : '', component : RecipeStartComponent},
    {path : 'new', component : RecipeEditComponent},
    {path : ':id', component : RecipeDetailComponent},
    {path : ':id/edit', component : RecipeEditComponent}
]