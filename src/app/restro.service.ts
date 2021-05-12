import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestroService {
url="http://localhost:3000/resto";
rootUrl="http://localhost:3000/"
  constructor(private http:HttpClient) { }

 getList(){
   
    return this.http.get(this.url)
  }
saveResto(data:any){
  console.warn(data);
  return this.http.post(this.url,data);
}

deleteResto(id:any){

  console.log(this.url);
  return this.http.delete(this.url+'/'+id);

}
 getCurrentResto(id:any){
  console.log(this.url+'/'+id);
               return this.http.get(this.url+'/'+id);

 }
 updateResto(id:any,data:any){
  console.log(this.url+'/'+id);
               return this.http.put(this.url+'/'+id,data);

 }
 registerResto(data:any){

  return this.http.post(this.rootUrl+"users",data);

 }
}
