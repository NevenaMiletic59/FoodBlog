import { Component, OnInit } from '@angular/core';
import {PostsServiceService} from '../../Services/posts-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css']
})
export class OnePostComponent implements OnInit {

  id;
  posts;
post;
sastojci;
  
  constructor(private service: PostsServiceService,private route:  ActivatedRoute, private http:HttpClient) {

    this.route.params.subscribe((params : Params)=>{
this.id=this.route.snapshot.params['id'];
    });
   }

  ngOnInit() {


 this.service.dohvatiPostove().subscribe(
   Response=>{

     this.posts=Response; 
 
     for(let i=0; i<this.posts.length;i++){
     
     if(this.posts[i].Id==this.id){
      
       this.post=this.posts[i];
       var str = this.post.sastojci;
       this.sastojci= str.split(',');
       console.log(this.sastojci);
      
     break; 
     }
    
       
     }
     
   }
 ,
 error => {
  console.log(error);
}
 );
  }

}
