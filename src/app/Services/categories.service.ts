import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  putanja="http://localhost:4200/assets/json";
    
  constructor(private service: HttpClient ){
      // this.service = new HttpClient(null)
  }


  
dohvatiKategorije(){

  var kategorije = this.service.get(this.putanja + "/categories.json");
  return kategorije;
}
}
