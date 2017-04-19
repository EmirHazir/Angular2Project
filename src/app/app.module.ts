import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { HeaderComponent } from './header.component';
import { RecipeBookComponent } from './recipe-book.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { DropdownDirective } from './dropdown.directive';
import { RecipeService } from "app/recipes/recipe.service";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";

@NgModule({
  declarations: [
    HeaderComponent,
    RecipeBookComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    DropdownDirective

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  
  providers: [RecipeService,ShoppingListService],
  bootstrap: [RecipeBookComponent]
})
export class AppModule { }
