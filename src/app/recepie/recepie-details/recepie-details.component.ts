import { Component,OnInit } from '@angular/core';
import { Recepie } from '../recepie.model';
import { RecepieService } from '../recepie.service';
import{ActivatedRoute,Params} from'@angular/router';
@Component({
  selector: 'app-recepie-details',
  templateUrl: './recepie-details.component.html',
  styleUrls: [ './recepie-details.component.css' ]
})
export class RecepieDetailsComponent implements OnInit {
  id:number;
  recepiedetailsSelected:Recepie;

 

  constructor(private recepieService:RecepieService,private route:ActivatedRoute){

  }
  ngOnInit(){
    //const id=this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];

        this.recepiedetailsSelected=this.recepieService.getRecepies(this.id);

      }
    )
  }


  onAddtoShoppingList(){

    this.recepieService.addIngredienttoShoppingist(this.recepiedetailsSelected.ingredient)

  }


  
 
}
