import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from "app/recipes";
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";
import { RECIPE_ROUTES } from "app/recipes/recipes.routes";

const APP_ROUTES : Routes = [
    {path:'',redirectTo:'/recipes', pathMatch:'full'},
    {path: 'recipes', component : RecipesComponent, children : RECIPE_ROUTES},
    {path: 'shopping-list', component : ShoppingListComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);