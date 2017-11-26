import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../service.service";
import {ActivatedRoute} from "@angular/router";
interface Blog{
  "id":number,
  "author_id":number,
  "title": string,
  "content": string,
  "category": string

}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
show:boolean;
blog:Blog;
id:any;
  constructor(private request:ServiceService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.request.getBlogData(this.id)
      .subscribe((data) => {
      this.blog=(data);
      })

  }

  update(){
    return this.request.updateData(this.id,this.blog)
      .subscribe((data) =>{

      })
  }



}
