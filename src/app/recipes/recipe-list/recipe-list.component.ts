import { Component, OnInit } from '@angular/core';

import { Recipe } from "../recipe";
import { RecipeService } from "app/recipes/recipe.service";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

recipes: Recipe[] = [];


  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
