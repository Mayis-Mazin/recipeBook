import { Router } from '@angular/router';
import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
selectedRecipe:Recipe

constructor(private recipeService:RecipeService,private router:Router){}
goTo(){
this.router.navigate(['/shopping-list'])
}
  ngOnInit()  {
     this.recipeService.recipeSelected.subscribe((recipe:Recipe)=>{
      this.selectedRecipe=recipe
     })
  }


}
