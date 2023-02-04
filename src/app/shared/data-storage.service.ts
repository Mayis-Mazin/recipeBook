import { Recipe } from './../recipes/recipe.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();

    this.http
      .put(
        'https://recipebook-6d83c-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json',
        recipes
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
  fechRecipes() {
    this.http
      .get<Recipe[]>(
        'https://recipebook-6d83c-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json'
      )
      .subscribe((recipes) => {
      this.recipeService.setRecipes(recipes)
      });
  }
}
