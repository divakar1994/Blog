import { Injectable } from '@angular/core';
import {Headers} from "@angular/http";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {HttpClient} from "@angular/common/http";




const BASE_URL='http://localhost:3000/blog/';
const header = {header: new Headers({'Content-Type':'application/json'})}

@Injectable()
export class ServiceService {

result:any;
  constructor(private http:HttpClient,private _http:Http) {

  }


  getData() {
    return this.http.get(BASE_URL)

  }
  postData(data){
    console.log(data);
    const uid = JSON.parse(localStorage.getItem('result'))[0];
    data.author_id=uid.id
    return this.http.post(BASE_URL,data)

  }

  deletePost(blog){
    return this._http.delete(BASE_URL+blog.id,header)
      .map(res=> res.json());
  }

  updateData(id,data){
    console.log(data);

    return this._http.patch(BASE_URL+id,data,header);
  }


  loginUser(name, password){
    return this.http.get(`http://localhost:3000/user?name=${name}&password=${password}`)

  }
  getUserwiseData(id){

    return this.http.get(`http://localhost:3000/blog?author_id=${id}`)
  }
  getBlogData(id){


    return this._http.get(BASE_URL+id)
      .map(res => res.json());
  }


}
