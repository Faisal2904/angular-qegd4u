import { Component,OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import{ShoppingService} from './shopping.service'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: [ './shopping-list.component.css' ]
})
export class ShoppingListComponent implements OnInit {

  ingredient:Ingredient[];
  
 constructor(private shoppingService:ShoppingService){
  
 } 

 ngOnInit(){
   this.ingredient=this.shoppingService.getIngredients();
   console.log('sadakdbakd'+this.ingredient)

   this.shoppingService.ingredientChanged.subscribe(
     (ingredien:Ingredient)=>{this.ingredient=ingredien}
     )
 }
 
}
