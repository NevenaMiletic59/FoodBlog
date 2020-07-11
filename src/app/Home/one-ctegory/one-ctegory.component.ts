import { Component, OnInit } from '@angular/core';
import {PostsServiceService} from '../../Services/posts-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-one-ctegory',
  templateUrl: './one-ctegory.component.html',
  styleUrls: ['./one-ctegory.component.css']
})
export class OneCtegoryComponent implements OnInit {
naziv;
  posts;
posto;
postovi;

  
  constructor(private service: PostsServiceService,private route:  ActivatedRoute, private http:HttpClient) {

    this.route.params.subscribe((params : Params)=>{
this.naziv=this.route.snapshot.params['naziv'];
    });
   }

  ngOnInit() {
    this.dohvati();
   

  }
  dohvati(){
    this.service.dohvatiPostove().subscribe(
      Response=>{
        this.posts=Response; 
        for(let i=0; i<this.posts.length;i++){
        this.posto=this.posts.filter(n=>n.Kategorija == this.naziv);
   console.log(this.posto);     
   break;
          
        }
      }
    ,
    error => {
     console.log(error);
   }
    );
  }
}
