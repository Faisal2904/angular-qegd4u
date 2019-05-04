//import {EventEmitter} from '@angular/core'
import {Ingredient} from '../shared/ingredient.model';
import{Subject} from 'rxjs/Subject'
export class ShoppingService{

  ingredientChanged=new Subject<Ingredient[]>();


  private ingredient:Ingredient[]=[new Ingredient('asdfghj',12)];

  getIngredients(){
    return this.ingredient.slice();
  }

  onIngredientAdded(ingred:Ingredient){
   //console.log(ingred);
   this.ingredient.push(ingred);
   // console.log(this.ingredient);
   this.ingredientChanged.next(this.ingredient.slice());
 }

 addIngredient(ingredient:Ingredient[]){
   this.ingredient.push(...ingredient) //i will add ingredient sepreately in the array
   this.ingredientChanged.next(this.ingredient.slice());
 }



  
}