import { Component } from '@angular/core';
import { Recepie } from '../recepie.model';
import{RecepieService} from '../recepie.service'

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: [ './recepie-list.component.css' ]
})
export class RecepieListComponent  {

   
  // @Output() recepieSelectedReceived=new EventEmitter<{name:string, description:string , imagePath:string}>();

  recepie:Recepie[]
  
  
    // new Recepies('test recepie', 'this is simply a test','')];
   
  constructor(private recepieService:RecepieService){
  }

  ngOnInit(){
    this.recepie=this.recepieService.getRecepie()
    console.log("inrecepie-list" + this.recepie)

  }//inikt ends

  // recepieRecived(recepieSelected:Recepie){
  //   console.log(recepieSelected);
  //   this.recepieSelectedReceived.emit(recepieSelected);

  // } 
}
