import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { Ingredient } from "app/shared/ingredient";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {
 @Input() item :Ingredient;
 @Output() cleared = new EventEmitter();
  isAdd = true;

  constructor(private sls:ShoppingListService) { }

  ngOnChanges(changes) {
   if(changes.item.currentValue === null){
    this.isAdd = true;
    this.item = {name:null,amount:null,description:null};
   }else{
     this.isAdd = false;
   }
  }

 onSubmit(ingredient:Ingredient){
   const newIngredient =  new Ingredient(ingredient.name, ingredient.amount, ingredient.description);
  if(!this.isAdd){  
    this.sls.editItem(this.item, newIngredient )
  }else{
    this.item = newIngredient;
    this.sls.addItem(this.item);
    this.sls.addItem(this.item);
  }
 }

 onDelete(){
   this.sls.deleteItem(this.item);
   this.onClear();
 }

 onClear(){
   this.isAdd = true;
   this.cleared.emit(null);
 }
}
