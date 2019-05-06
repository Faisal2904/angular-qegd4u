import { Component,OnInit,OnDestroy } from '@angular/core';
import{Subscription} from 'rxjs/Subscription;'
import{Subject} from 'rxjs/Subject;'


import {Ingredient} from '../shared/ingredient.model';
import{ShoppingService} from './shopping.service'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: [ './shopping-list.component.css' ]
})
export class ShoppingListComponent implements OnInit ,OnDestroy{

  ingredient:Ingredient[];
  private subscription:Subscription;
  
 constructor(private shoppingService:ShoppingService){
  
 } 

 ngOnInit(){
   this.ingredient=this.shoppingService.getIngredients();
   console.log('sadakdbakd'+this.ingredient)

   this.subscription=this.shoppingService.ingredientChanged.subscribe(
     (ingredien:Ingredient)=>{this.ingredient=ingredien}
     )
 }
 onEdit(id:number){
   console.log("in OnEdit")
   this.shoppingService.startedEditin.next(id);
 }

 ngOnDestroy(){
   this.subscription.unsubscribe();
 }
 
}
