import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {RestroService} from '../restro.service';

@Component({
  selector: 'app-register-resto',
  templateUrl: './register-resto.component.html',
  styleUrls: ['./register-resto.component.css']
})
export class RegisterRestoComponent implements OnInit {
  register:any=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
  });
  constructor(private resto:RestroService) { }
  alert:any=false;
  ngOnInit(): void {
  }
collection(){
  console.log(this.register.value);
  this.resto.registerResto(this.register.value).subscribe((result)=>{
    console.log(result);
    this.alert=true;
  })
  
}
closeAlert(){
  this.alert=false;
}
}
