import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../../Services/navigation.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  meni;
  constructor(private service:NavigationService , private route:  Router,private putanje:ActivatedRoute) {

   }

  ngOnInit(): void {
    
    this.service.dohvatiMeni().subscribe(

      podaci=>{
        console.log(podaci);
        this.meni=podaci;
      },
      error => {
        console.log(error);
      }
    );
  }

}
