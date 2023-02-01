import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';
import { Ingrediant } from './../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  ediitItemIndex: number;
  ediitItem: Ingrediant;
  @ViewChild('f') slForm: NgForm;

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.ediitItemIndex = index;
        this.editMode = true;
        this.ediitItem = this.slService.getIngerdient(index);
        this.slForm.setValue({
          name: this.ediitItem.name,
          amount: this.ediitItem.amount,
        });
      }
    );
  }

  onSubmit(f: NgForm) {
    const value = f.value;
    const newIngredient = new Ingrediant(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngerdient(this.ediitItemIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    f.reset();
  }

  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }
  onDelete(){
    this.slService.deleteIngerdient(this.ediitItemIndex)
    this.onClear()

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
