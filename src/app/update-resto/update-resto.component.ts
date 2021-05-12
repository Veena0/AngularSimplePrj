import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { Subscriber } from 'rxjs';
import  {RestroService} from '../restro.service';
@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
 
  editResto=new FormGroup({
    name :new FormControl(''),
    address:new FormControl(''),
    email:new FormControl('')

  })
  constructor(private resto:RestroService ,private router:ActivatedRoute) { }
  alert:boolean=false
  ngOnInit(): void {
  
    console.log(this.router.snapshot.params.id);
    this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe((result:any)=>{
      this.editResto=new FormGroup({
        name :new FormControl(result['name']),
        address:new FormControl(result['address']),
        email:new FormControl(result['email'])
    
      })
      console.warn("result",result);
    })
  }
  collection(){
    this.editResto.value;
    console.warn(this.editResto.value);
    this.resto.updateResto(this.router.snapshot.params.id,this.editResto.value).subscribe((result)=>{
     this.alert=true;
      console.warn(result);
      this.editResto.reset({});
    })
  }
  closeAlert(){
    console.warn(this.alert);
    this.alert=false;
  }
  
}
