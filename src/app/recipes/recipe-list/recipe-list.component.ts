import { Component, OnInit } from '@angular/core';

import { Recipe } from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent implements OnInit {

recipes: Recipe[] = [];
 recipe = new Recipe('Dummy','Dummy manken ','http://thumbs2.ebaystatic.com/d/l225/m/mM5u2kVAYbs3IRlwPfl6uOA.jpg' )
  constructor() { }

  ngOnInit() {
  }

}
