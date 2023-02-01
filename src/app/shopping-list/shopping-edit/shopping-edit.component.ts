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
  ediitItem:Ingrediant
  @ViewChild('f') slForm:NgForm
  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.ediitItemIndex = index;
        this.editMode = true;
        this.ediitItem=this.slService.getIngerdient(index);
        this.slForm.setValue({
          name: this.ediitItem.name,
          amount: this.ediitItem.amount,
        });
      }
    );
  }

  onAddItem(f: NgForm) {
    const value = f.value;
    const newIngredient = new Ingrediant(value.name, value.amount);
    this.slService.addIngredient(newIngredient);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

