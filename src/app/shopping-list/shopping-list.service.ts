import { EventEmitter } from '@angular/core';
import { Ingrediant } from './../shared/ingredient.model';

  export class ShoppingListService{
    ingrediantChanged=new EventEmitter<Ingrediant[]>();
    private ingrediants:Ingrediant[]=[
      new Ingrediant('Apple',5),
      new Ingrediant('Tomatoes',10)]

getIngredient(){
  return this.ingrediants
}
   addIngredient(ingrediant:Ingrediant){
    this.ingrediants.push(ingrediant);
    this.ingrediantChanged.emit(this.ingrediants.slice());
   }
  }
