import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm, NgControl, NgModel } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(){}
  screen="";
  a;
  b;
  c;
  d="";
  e="";

  ngOnInit(): void {
  }
  value(value){
    if((this.b=='+')||(this.b=='-')||(this.b=='*')||(this.b=='/')){
      this.d=this.d+value;
      this.screen=this.screen+value;
      this.c=this.d;
    }
    else{
      this.screen=this.screen+value;
      this.a=this.screen;
    }
  }
  condition(value){
    this.screen=this.screen+value;
    this.b=value;
  }
  clear(){
    this.screen="";
    this.a="";
    this.b="";
    this.c="";
    this.d="";
  }
objectArray=[]
result(){
  if(this.b=="+"){
    this.screen=this.screen+"="+(parseInt(this.a)+parseInt(this.c)).toString();
    this.screen=(parseInt(this.screen)+parseInt(this.c)).toString();
    this.objectArray.push(parseInt(this.screen)+parseInt(this.c));
    console.log(this.objectArray)
  }
  if(this.b=="-"){
    this.screen=this.screen+"="+(parseInt(this.a)-parseInt(this.c)).toString();
    this.screen=(parseInt(this.screen)-parseInt(this.c)).toString();
    this.objectArray.push(parseInt(this.screen)+parseInt(this.c));
    console.log(this.objectArray)


  }
  if(this.b=="*"){
    this.screen=this.screen+"="+(parseInt(this.a)*parseInt(this.c)).toString();
    this.screen=(parseInt(this.screen)*parseInt(this.c)).toString();
    this.objectArray.push(parseInt(this.screen)+parseInt(this.c));
    console.log(this.objectArray)


  }
  if(this.b=="/"){
    this.screen=this.screen+"="+(parseInt(this.a)/parseInt(this.c)).toString();
    this.screen=(parseInt(this.screen)/parseInt(this.c)).toString();
    this.objectArray.push(parseInt(this.screen)+parseInt(this.c));
    console.log(this.objectArray)


  }

}
  title = 'My Calculator app';
}
