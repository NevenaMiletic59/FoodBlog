import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor( private service : HttpClient){
       
  }

  dohvatiMeni(){

      var post = this.service.get("http://localhost:4200/assets/json/menu.json");
      return post;  
  }

  
}
