import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

 
  contactForm: FormGroup;
  isMessageDisplayes : boolean =false;

 
   constructor() { }
 
   ngOnInit() {
  this.contactForm=new FormGroup({
   fullName:new FormControl("",[Validators.required, Validators.pattern('^[A-Z][a-z]{1,12}\\s[A-Z][a-z]{1,12}$')]),
   email: new FormControl("",[Validators.required,Validators.email]),
   message:new FormControl ("",[Validators.required,Validators.minLength(5),Validators.maxLength(500)])
     });
 
   }
 
   
   onSubmit(){
     this.isMessageDisplayes=true;
    console.log(this.contactForm);
     this.contactForm.reset();

   }
 
}
