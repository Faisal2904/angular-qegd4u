import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpModule} from '@angular/http';

import{RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {HeaderComponent} from './header/header.component';
import {RecepieComponent} from './recepie/recepie.component';
import {RecepieListComponent} from './recepie/recepie-list/recepie-list.component';
import {RecepieDetailsComponent} from './recepie/recepie-details/recepie-details.component';
import {RecepieStartComponent} from './recepie/recepie-start/recepie-start.component';
import {RecepieEditComponent} from './recepie/recepie-edit/recepie-edit.component';


import {RecepieItemComponent} from './recepie/recepie-list/recepie-item/recepie-item.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';
import {DropdownDirective} from './shared/dropdown.directive';
import{ShoppingService} from './shopping-list/shopping.service';
import{RecepieService} from './recepie/recepie.service';

import {AppRoutingModule} from './app-routing.module';
import{DataStorageService} from './shared/data-storage.service';



@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,ReactiveFormsModule,HttpModule ],
  declarations: [ AppComponent, HelloComponent,HeaderComponent, RecepieComponent, RecepieListComponent, RecepieDetailsComponent ,RecepieItemComponent, ShoppingListComponent, ShoppingEditComponent,DropdownDirective,RecepieStartComponent,RecepieEditComponent],
  bootstrap:    [ AppComponent ],
  providers:[ShoppingService,RecepieService,DataStorageService]
})
export class AppModule { }
