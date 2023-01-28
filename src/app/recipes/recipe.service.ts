
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingrediant } from './../shared/ingredient.model';
import {    Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(

      'Recipe 1',
      'simple Descreption',
      'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/british_shakshuka_26737_16x9.jpg',
      [new Ingrediant('meet', 4), new Ingrediant('French Fries', 24)]
    ),
    new Recipe(

      'Rec 2',
      'this is what we have',
      'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/british_shakshuka_26737_16x9.jpg',
      [new Ingrediant('meet', 1), new Ingrediant('French Fries', 34)]
    ),
  ];
  constructor(private sLServace: ShoppingListService) {}

  getRecipes() {
    //slice: return a new array which is an ecxact copy of this array
    return this.recipes.slice();
  }

  addIngrediantsToShoppingList(ingrediants: Ingrediant[]) {
    this.sLServace.addIngerdents(ingrediants);
  }

  getRecipe(index: number) {

  return this.recipes[index]
  }

  updateRecipe(  description: string, name:string, imagPath:string, ingrediant:Ingrediant[]) {
    const recipe = this.recipes.find((r) => {
      // return r.id === id;
    });
    if (recipe) {
      recipe.description = description;
      recipe.name = name;
      recipe.imagPath = imagPath;
      recipe.ingrediants = ingrediant;
    }
  }
}
