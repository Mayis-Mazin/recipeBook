import { Ingrediant } from './../../shared/ingredient.model';
import { Component, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
 @ViewChild('nameInput') nameInputRef:ElementRef;
 @ViewChild('amountInput') amountInputRef:ElementRef;
 @Output() ingredientAdded=new EventEmitter<Ingrediant>();
 onAddItem(){
  const ingName=this.nameInputRef.nativeElement.value
  const ingAmount=this.amountInputRef.nativeElement.value

  const newIngredient= new Ingrediant(ingName,ingAmount);
this.ingredientAdded.emit(newIngredient)

 }
}
