import {NgModule} from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import {RecepieComponent} from './recepie/recepie.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecepieDetailsComponent} from './recepie/recepie-details/recepie-details.component';
import {RecepieStartComponent} from './recepie/recepie-start/recepie-start.component';
import {RecepieEditComponent} from './recepie/recepie-edit/recepie-edit.component';







const appRoutes:Routes=[
  {path:'', redirectTo:"/recepie",pathMatch:'full'},
  {path:'recepie', component:RecepieComponent, children:[
    {path:'', component:RecepieStartComponent},
    {path:'new', component:RecepieEditComponent},
    {path:':id', component:RecepieDetailsComponent},
    {path:':id/edit', component:RecepieEditComponent}

  ]},
  {path:'shopping-list',component:ShoppingListComponent}
]
@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})

export class AppRoutingModule{

}