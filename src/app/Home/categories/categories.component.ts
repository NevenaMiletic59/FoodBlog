import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../../Services/categories.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  kategorije;

  
  constructor(private serviceKat: CategoriesService,private route:  ActivatedRoute) { 
    
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

}
