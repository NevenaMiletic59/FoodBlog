import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor( private service : HttpClient){
       
  }

 add(message){
  var posts = this.service.post("http://localhost:4200/assets/json/comment.json",message);
  return posts; 

 }

 dohvatiComment(){

  var post = this.service.get("http://localhost:4200/assets/json/comment.json");
  return post;  
}
}
