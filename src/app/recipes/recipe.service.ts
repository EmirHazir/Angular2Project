import { Injectable } from '@angular/core';

import { Recipe } from "../recipes/recipe";
import { Ingredient } from "app/shared/ingredient";

@Injectable()
export class RecipeService {
private recipes: Recipe[] = [
  new Recipe('Salata','Çok lezzetli ','http://www.haberprime.com/images/upload/salata1.jpg',[
    new Ingredient('Domates',2,'asd'),
    new Ingredient('mısır',1,'asd'),

  ] ),
 new Recipe('Tokat Kebabı','Off diyorum ','https://www.gurmerehberi.com/wp-content/uploads/2011/09/Tokat-Kebabi.jpg',[] )
];
  constructor() { }
  
  getRecipes(){
    return this.recipes;
  }

}
