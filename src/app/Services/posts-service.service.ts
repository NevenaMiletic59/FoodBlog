import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {

  constructor( private service : HttpClient){
       
  }

  dohvatiPostove(){

      var post = this.service.get("http://localhost:4200/assets/json/posts.json");
      return post;  
  }

  dohvatiPost(Kategorija:string){

    var post = this.service.get("http://localhost:4200/assets/json/posts.json");
    return post;  
}
dohvatiGaleriju(){

  var post = this.service.get("http://localhost:4200/assets/json/gallery.json");
  return post;  
}
}
