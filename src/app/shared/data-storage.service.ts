import{Injectable} from '@angular/core';
import 'rxjs/Rx';
import{Http,Response} from '@angular/http';
import{RecepieService} from '../recepie/recepie.service';
import{Recepie} from '../recepie/recepie.model'

import{map} from 'rxjs/operators';

@Injectable()
export class DataStorageService{

  constructor(private http:Http, private recepieService:RecepieService){}
  

storeRecepies(){
  console.log("in store fagyay");
 return this.http.put('https://ng-recepie-1cce5.firebaseio.com/recepie.json', this.recepieService.getRecepie()
 );
}
getRecepies(){
  console.log("in store fagyay");
 return this.http.get('https://ng-recepie-1cce5.firebaseio.com/recepie.json').map(
   (response:Response)=>{
      const recepie: Recepie[]=response.json();

      for(let x of recepie){
        if(!recepie['ingredients']){
                recepie['ingredients']=[];
        }
        }
      return recepie;
     
   },
   (error)=>{console.log("this is error",error)}
 ).subscribe(
   (recepies:Recepie[])=>{
       this.recepieService.setRecepiesdata(recepies);
   }
   
 );
}
}