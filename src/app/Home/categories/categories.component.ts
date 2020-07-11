import { Component, OnInit, Input } from '@angular/core';
import {CategoriesService} from '../../Services/categories.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {PostsServiceService} from '../../Services/posts-service.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  kategorije;
  posts;
  @Input() post;
naziv;
  
  constructor(private service: PostsServiceService,private route:  ActivatedRoute, private http:HttpClient, private serviceKat:CategoriesService) {

    this.route.params.subscribe((params : Params)=>{
this.naziv=this.route.snapshot.params['naziv'];
    });
   }

  ngOnInit() {
    this.serviceKat.dohvatiKategorije().subscribe(
      response => {
        console.log(response);
        this.kategorije= response;
      },
      error => {
        console.log(error);
      } );
    }


    getCategory(naziv){
      this.service.dohvatiPostove().subscribe(
        Response=>{
          this.posts=Response; 
          for(let i=0; i<this.posts.length;i++){
          this.post=this.posts.filter(n=>n.Kategorija == naziv);
     console.log(this.post);     
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
