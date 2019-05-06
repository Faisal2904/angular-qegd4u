//import {EventEmitter} from '@angular/core'
import {Ingredient} from '../shared/ingredient.model';
import{Subject} from 'rxjs/Subject'
export class ShoppingService{

  ingredientChanged=new Subject<Ingredient[]>();
  startedEditin = new Subject<Number>();



  private ingredient:Ingredient[]=[new Ingredient('asdfghj',12)];

  getIngredients(){
    return this.ingredient.slice();
  }
  getIngredient(index:number){
    return this.ingredient[index];

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
 updateIngredient(index:number,newIngredien:Ingredient){
   this.ingredient[index]=newIngredien;
   this.ingredientChanged.next(this.ingredient.slice());

 }
 deleteIngredient(index:number){
   this.ingredient.splice(index,1);
   this.ingredientChanged.next(this.ingredient.slice());

 }



  
}