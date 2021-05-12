import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import {RestroService} from "../restro.service";

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  constructor(private resto:RestroService) { }
  addResto=new FormGroup({
    name:new FormControl(''),
    address:new FormControl(''),
    email:new FormControl('')
  });
  alert:boolean=false;
  ngOnInit(): void {
  }

  collectResto(){
    //console.warn(this.addResto.value);
            this.resto.saveResto(this.addResto.value).subscribe((result)=>this.alert=true);
            this.addResto.reset({});
  }
  
 
  closeAlert(){
    console.warn(this.alert);
    this.alert=false;
  }

}
