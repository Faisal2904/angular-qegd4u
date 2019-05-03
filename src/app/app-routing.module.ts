import {NgModule} from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import {RecepieComponent} from './recepie/recepie.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecepieDetailsComponent} from './recepie/recepie-details/recepie-details.component';
import {RecepieStartComponent} from './recepie/recepie-start/recepie-start.component';






const appRoutes:Routes=[
  {path:'', redirectTo:"/recepie",pathMatch:'full'},
  {path:'recepie', component:RecepieComponent, children:[
    {path:'', component:RecepieStartComponent},
    {path:':id', component:RecepieDetailsComponent}
  ]},
  {path:'shopping-list',component:ShoppingListComponent}
]
@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})

export class AppRoutingModule{

}