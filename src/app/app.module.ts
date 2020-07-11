import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ViewChild} from "@angular/core";


import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home/home.component';
import {PostsServiceService} from './Services/posts-service.service';
import { NavigationComponent } from './Home/navigation/navigation.component';
import{HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './Home/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './Home/about/about.component';
import { RecipesComponent } from './Home/recipes/recipes.component';
import { OneCtegoryComponent } from './Home/one-ctegory/one-ctegory.component';
import { CategoriesComponent } from './Home/categories/categories.component';
import { OnePostComponent } from './Home/one-post/one-post.component';
import {CategoriesService} from './Services/categories.service';
import { CommentComponent } from './Home/comment/comment.component';
import {CommentService} from './Services/comment.service';
import { ContactComponent } from './Home/contact/contact.component';
import {ContactService} from './Services/contact.service';
import { FilterPipePipe } from './Services/filter-pipe.pipe';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'recipes',component:RecipesComponent},
  {path:'post/:naziv',component:OneCtegoryComponent },
  {path:'postOne/:id',component:OnePostComponent },
  {path:'contact',component:ContactComponent }
  
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    AboutComponent,
    RecipesComponent,
    OneCtegoryComponent,
    CategoriesComponent,
    OnePostComponent,
    CommentComponent,
    ContactComponent,
    FilterPipePipe,
  
   
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    [RouterModule.forRoot(routes)],
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
 
],
  providers: [PostsServiceService, CategoriesService,CommentService,ContactService],
  bootstrap: [NavigationComponent, AppComponent,FooterComponent, AboutComponent,RecipesComponent, OneCtegoryComponent,CategoriesComponent,OnePostComponent, CommentComponent,ContactComponent]
})
export class AppModule { }
