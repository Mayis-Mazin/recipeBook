import { Recipe } from './../recipe.model';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
recipes:Recipe[]=[new Recipe('Test Rec','simple Des','https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/british_shakshuka_26737_16x9.jpg')];
@Output() recipeWasSelected=new EventEmitter<Recipe>
onRecipeSelected(recipe:Recipe){
this.recipeWasSelected.emit(recipe)
}
}
