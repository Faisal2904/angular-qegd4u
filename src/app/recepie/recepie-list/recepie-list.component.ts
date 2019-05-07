import { Component,OnInit,OnDestroy} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import{Subscription}from 'rxjs/Subscription'


import { Recepie } from '../recepie.model';
import{RecepieService} from '../recepie.service'

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: [ './recepie-list.component.css' ]
})
export class RecepieListComponent implements OnInit,OnDestroy {

   
  // @Output() recepieSelectedReceived=new EventEmitter<{name:string, description:string , imagePath:string}>();

  recepie:Recepie[];
  subscription:Subscription;
  
  
    // new Recepies('test recepie', 'this is simply a test','')];
   
  constructor(private recepieService:RecepieService,private router:Router,private route:ActivatedRoute){
  }

  ngOnInit(){
    this.recepie=this.recepieService.getRecepie()
    console.log("inrecepie-list" , this.recepie);
    //console.log("service-list" , this.recepieService.recepie);


this.subscription=this.recepieService.recepieChanged.subscribe(
  (recepie:Recepie[])=>{this.recepie=recepie;
  console.log("inside subscribe",recepie);}
)
  }//inikt ends

  // recepieRecived(recepieSelected:Recepie){
  //   console.log(recepieSelected);
  //   this.recepieSelectedReceived.emit(recepieSelected);

  // } 


  navigateToNew(){
    console.log("in navigatetonew");
    this.router.navigate(['new'],{relativeTo:this.route});

  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
