import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service.service";


interface Blog{
  "id":number,
  "author_id":number,
  "title": string,
  "content": string,
  "category": string

}

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})





export class AddnewComponent implements OnInit {
  result:any;
  blog:Blog;
  Handler()
  {

  }
  constructor(private request:ServiceService) {
    this.blog={
      "id":null,
      "author_id":null,
      "title": "",
      "content": "",
      "category": ""
    }


  }

  ngOnInit() {


  }
  add(blog){
    return this.request.postData(this.blog).subscribe((data)=>{
      console.log(data)

      this.result=data
    window.location.href='/myblogss'});
  }



}
