import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

recipes: Recipe[] = [
  new Recipe('Salata','Çok lezzetli ','http://www.haberprime.com/images/upload/salata1.jpg',[] ),
 new Recipe('Tokat Kebabı','Off diyorum ','https://www.gurmerehberi.com/wp-content/uploads/2011/09/Tokat-Kebabi.jpg',[] )
];
@Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe:Recipe){
      this.recipeSelected.emit(recipe);
  }
}
