import{Injectable} from '@angular/core';
import{Http} from '@angular/http';
import{RecepieService} from '../recepie/recepie.service'

@Injectable()
export class DataStorageService{

  constructor(private http:Http, private recepieService:RecepieService){}
  

storeRecepies(){
 this.http.put('https://ng-recepie-1cce5.firebaseio.com/recepie.json', this.recepieService.getRecepie()
 );
}
}