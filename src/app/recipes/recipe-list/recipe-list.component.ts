import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
// recipes:Recipe[]=[new Recipe('Test Rec','simple Des','https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/british_shakshuka_26737_16x9.jpg')];
// @Output() recipeWasSelected=new EventEmitter<Recipe>

recipes:Recipe[]
constructor(private recipeService:RecipeService, route:ActivatedRoute){}
ngOnInit()  {
  this.recipes=this.recipeService.getRecipes()



}



}
