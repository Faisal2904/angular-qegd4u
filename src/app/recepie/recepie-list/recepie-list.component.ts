import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

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
   
  constructor(private recepieService:RecepieService,private router:Router,private route:ActivatedRoute){
  }

  ngOnInit(){
    this.recepie=this.recepieService.getRecepie()
    console.log("inrecepie-list" + this.recepie)

  }//inikt ends

  // recepieRecived(recepieSelected:Recepie){
  //   console.log(recepieSelected);
  //   this.recepieSelectedReceived.emit(recepieSelected);

  // } 


  navigateToNew(){
    console.log("in navigatetonew");
    this.router.navigate(['new'],{relativeTo:this.route});

  }
}
