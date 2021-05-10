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

  
  collections={};

  ngOnInit(): void {

    this.resto.getList().subscribe((results)=>{

      console.warn(results);
      this.collections=results;

    })
    //this.resto.getList();
  }

}
