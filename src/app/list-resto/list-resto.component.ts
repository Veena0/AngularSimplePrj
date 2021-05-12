import { Component, Input, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import {RestroService} from '../restro.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  constructor(private resto:RestroService) { }

  
  collections:any=[];

  ngOnInit(): void {

    this.resto.getList().subscribe((results)=>{

      console.warn(results);
      this.collections=results;

      console.log(this.collections);
    })
    //this.resto.getList();
  }

  deleteResto(item:any){
   // console.warn(item);
   this.collections.splice(item-1,1)
this.resto.deleteResto(item).subscribe((result)=>{
  console.warn(result);
})
  }

  getCurrentResto(item:any){
  this.resto.getCurrentResto(item).subscribe((result)=>{
    console.warn(result)
  })
  }


}
