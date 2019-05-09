import{Injectable} from '@angular/core';
import{Http,Response} from '@angular/http';
import{RecepieService} from '../recepie/recepie.service'

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
 return this.http.get('https://ng-recepie-1cce5.firebaseio.com/recepie.json').subscribe(
   (response:Response)=>{
        const recepie=response.json()
   }
 );
}
}