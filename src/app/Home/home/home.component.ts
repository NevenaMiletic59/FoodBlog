import { Component, OnInit } from '@angular/core';

import { PostsServiceService } from '../../Services/posts-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  post;
  id;
  search:string;
  constructor(private service: PostsServiceService, private route:  Router,private putanje:ActivatedRoute) {
    this.id=putanje.snapshot.params['id']
   }

  ngOnInit(): void {
    
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
