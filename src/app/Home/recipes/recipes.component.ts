import { Component, OnInit, ViewChild } from '@angular/core';
import {CategoriesService} from '../../Services/categories.service';
import {PostsServiceService} from '../../Services/posts-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {CategoriesComponent} from '../categories/categories.component';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @ViewChild(CategoriesComponent) child;
  kategorije;
  post;
  
  constructor(private serviceKat: CategoriesService,private route:  ActivatedRoute, private service: PostsServiceService) { 
    
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


      this.service.dohvatiPostove().subscribe(

        podaci=>{
          console.log(podaci);
          this.post=podaci;
        },
        error => {
          console.log(error);
        }
      );
    

          
}

}
