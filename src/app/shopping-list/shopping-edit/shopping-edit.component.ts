import { Component,Elementref,ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingService} from '../shopping.service'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: [ './shopping-edit.component.css' ]
})
export class ShoppingEditComponent  {
  name = 'Angular';
  @ViewChild('amountInput') amount:Elementref;
  @ViewChild('nameInput') name:Elementref;
  //@Output() onIngredientAdded=new EventEmitter<Ingredient>();

  constructor(private shoppingService:ShoppingService){}

  onAdd(){

    const newIngridient= new Ingredient(this.name.nativeElement.value,this.amount.nativeElement.value);
    this.shoppingService.onIngredientAdded(newIngridient);
   

  }
}
