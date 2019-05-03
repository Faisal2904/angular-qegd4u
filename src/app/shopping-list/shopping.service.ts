import {EventEmitter} from '@angular/core'
import {Ingredient} from '../shared/ingredient.model';
export class ShoppingService{

  ingredientChanged=new EventEmitter<Ingredien[]>();


  private ingredient:Ingredient[]=[new Ingredient('asdfghj',12)];

  getIngredients(){
    return this.ingredient.slice();
  }

  onIngredientAdded(ingred:Ingredient){
   //console.log(ingred);
   this.ingredient.push(ingred);
   // console.log(this.ingredient);
   this.ingredientChanged.emit(this.ingredient.slice());
 }

 addIngredient(ingredient:Ingredient[]){
   this.ingredient.push(...ingredient) //i will add ingredient sepreately in the array
   this.ingredientChanged.emit(this.ingredient.slice());
 }



  
}