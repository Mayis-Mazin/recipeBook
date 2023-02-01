import { Subject } from 'rxjs';
import { Ingrediant } from './../shared/ingredient.model';

export class ShoppingListService {
  ingrediantChanged = new Subject<Ingrediant[]>();
  startedEditing=new Subject<number>();
  private ingrediants: Ingrediant[] = [
    new Ingrediant('Apple', 5),
    new Ingrediant('Tomatoes', 10),
  ];

  getIngredient() {
    return this.ingrediants;
  }
  addIngredient(ingrediant: Ingrediant) {
    this.ingrediants.push(ingrediant);
    this.ingrediantChanged.next(this.ingrediants.slice());
  }
  addIngerdents(ingrediants: Ingrediant[]) {
    this.ingrediants.push(...ingrediants);
    this.ingrediantChanged.next(this.ingrediants.slice());
  }
}
