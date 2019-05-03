import {EventEmitter,Injectable} from '@angular/core';
import { Recepie } from './recepie.model';
import{Ingredient} from '../shared/ingredient.model';
import{ShoppingService} from '../shopping-list/shopping.service'
@Injectable()
export class RecepieService{

   recepieSelected=new EventEmitter<Recepie>();

private recepie:Recepie[]=[
    new Recepie('pizza','this is a test','C:\Users\mdfaisal.iqbal\Desktop',[
      new Ingredient('dough',1),
      new Ingredient('olive',1)
      ]),

    new Recepie('burger','this is a test','hdfadhad',[
      new Ingredient('bread',1),
      new Ingredient('cabbage',1)
      ])
  ];


  constructor(private shoppingService:ShoppingService){}

  getRecepie(){
    return this.recepie.slice();
  }
  getRecepies(index:number){
    return this.recepie[index];
  }

  addIngredienttoShoppingist(ingredients:Ingredient[]){
  this.shoppingService.addIngredient(ingredients);
  }

  
 
  

}