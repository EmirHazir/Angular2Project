import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "../recipes/recipe";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";



@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit { 
  @Input() selectedRecipe: Recipe;

  constructor(private sls : ShoppingListService) { }

  ngOnInit() {
  }

  onAddToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

}
