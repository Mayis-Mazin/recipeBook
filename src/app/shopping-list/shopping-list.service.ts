import { Subject } from 'rxjs';
import { Ingrediant } from './../shared/ingredient.model';

export class ShoppingListService {
  ingrediantChanged = new Subject<Ingrediant[]>();
  startedEditing=new Subject<number>();
  private ingrediants: Ingrediant[] = [
    new Ingrediant('Apple', 5),
    new Ingrediant('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingrediants.slice();
  }
  getIngerdient(index:number){
    return this.ingrediants[index]
  }
  addIngredient(ingrediant: Ingrediant) {
    this.ingrediants.push(ingrediant);
    this.ingrediantChanged.next(this.ingrediants.slice());
  }
  addIngerdents(ingrediants: Ingrediant[]) {
    this.ingrediants.push(...ingrediants);
    this.ingrediantChanged.next(this.ingrediants.slice());
  }
  updateIngerdient(index:number,newIngredient:Ingrediant){
    this.ingrediants[index] = newIngredient;
    this.ingrediantChanged.next(this.ingrediants.slice())
  }
  deleteIngerdient(index:number){
    this.ingrediants.splice(index,1);
    this.ingrediantChanged.next(this.ingrediants.slice());
  }
}
