import { Component,OnInit,OnDestroy,ViewChild,ElementRef} from '@angular/core';
import { NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingService} from '../shopping.service'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: [ './shopping-edit.component.css' ]
})
export class ShoppingEditComponent implements OnInit,OnDestroy  {
  name = 'Angular';
  subscription:Subscription;
  editMode=false;
  editedItemindex;
  editedItem:Ingredient;
  @ViewChild('f') slForm:NgForm;
 
  constructor(private shoppingService:ShoppingService){}

  onSubmit(formData:NgForm){
    const value=formData.value;
    const newIngridient= new Ingredient(value.name,value.amount);
    
    if(this.editMode){
       this.shoppingService.updateIngredient(this.editedItemindex,newIngridient);
    }
    else{
       this.shoppingService.onIngredientAdded(newIngridient);
    }
    this.editMode=false;
    this.slForm.reset();

   // console.log("hjasdjjj",value);

  }
  ngOnInit(){
    this.subscription=this.shoppingService.startedEditin.subscribe(
      (index:number)=>{this.editMode=true;
      this.editedItemindex=index;
      this.editedItem=this.shoppingService.getIngredient(index);
      this.slForm.setValue({name:this.editedItem.name, amount:this.editedItem.amount})}
    );
    
}
clearForm(){
  this.slForm.reset();
  this.editMode=false;
}
deleteIngred(){
  this.shoppingService.deleteIngredient(this.editedItemindex);
  this.clearForm();
}
ngOnDestroy(){
  console.log(this.editMode,this.editedItemindex,this.editedItem);
this.subscription.unsubscribe();
}
}