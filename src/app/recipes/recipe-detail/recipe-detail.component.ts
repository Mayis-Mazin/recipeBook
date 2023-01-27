import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe;
  id:number
constructor( private recipeService:RecipeService,private route:ActivatedRoute){}


onAddToShoppingList(){
this.recipeService.addIngrediantsToShoppingList(this.recipe.ingrediants);
}
ngOnInit() {
   this.route.params.subscribe((params:Params)=>{
    this.id=+params['id'];
    this.recipe=this.recipeService.getRecipe(this.id)
   })
}
}
