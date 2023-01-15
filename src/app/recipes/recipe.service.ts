import { EventEmitter } from '@angular/core';
import { Recipe } from "./recipe.model";

 export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>();
private recipes:Recipe[]=[new Recipe('Test Rec','simple Des','https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/british_shakshuka_26737_16x9.jpg')];

getRecipes(){
  //slice: return a new array which is an ecxact copy of this array
  return this.recipes.slice()
}

 }
