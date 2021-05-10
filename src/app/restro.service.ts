import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestroService {
url="http://localhost:3000/resto";
  constructor(private http:HttpClient) { }

 getList(){
   
    return this.http.get(this.url)
  }
}
