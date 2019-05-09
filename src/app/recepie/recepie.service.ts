import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'
import { Recepie } from './recepie.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service'
@Injectable()
export class RecepieService {
  recepieChanged = new Subject<Recepie[]>();

  recepieSelected = new EventEmitter<Recepie>();

  private recepie: Recepie[] = [
    new Recepie('pizza', 'this is a test', 'C:\Users\mdfaisal.iqbal\Desktop', [
      new Ingredient('dough', 1),
      new Ingredient('olive', 1)
    ]),

    new Recepie('burger', 'this is a test', 'hdfadhad', [
      new Ingredient('bread', 1),
      new Ingredient('cabbage', 1)
    ])
  ];


  constructor(private shoppingService: ShoppingService) { }

  setRecepiesdata(recepies:Recepie[]){
   this.recepie=recepies;
   this.recepieChanged.next(this.recepie.slice());
  }

  getRecepie() {
    return this.recepie.slice();
  }
  getRecepies(index: number) {
    return this.recepie[index];
  }
  addRecepies(recepie: Recepie) {
    console.log("addRecepies callsed");

    this.recepie.push(recepie);
    this.recepieChanged.next(this.recepie.slice());


  }
  updateRecepies(index: number, newRecepie: Recepie) {
    console.log("updateRecepies callsed",newRecepie);

    this.recepie[index] = newRecepie;
    this.recepieChanged.next(this.recepie.slice());
  }

  addIngredienttoShoppingist(ingredients: Ingredient[]) {
  
    this.shoppingService.addIngredient(ingredients);
    this.recepieChanged.next(this.recepie.slice());

  }
  deleteRecepie(index:number){
    console.log("indele1");

    this.recepie.splice(index,1);
    this.recepieChanged.next(this.recepie.slice());

  }





}