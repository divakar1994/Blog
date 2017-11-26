import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../service.service";
import {Router} from "@angular/router";

interface Blog{
  "id":number,
  "author_id":number,
  "title": string,
  "content": string,
  "category": string

}


@Component({
  selector: 'app-myblogss',
  templateUrl: './myblogss.component.html',
  styleUrls: ['./myblogss.component.css']
})

export class MyblogssComponent implements OnInit {
  results: any;
  result:any;
  show:boolean=false;
  blog:Blog;

  constructor(private request: ServiceService, private router: Router) {
    this.blog={
      "id":null,
      "author_id":null,
      "title": "",
      "content": "",
      "category": ""
    }
  }

  ngOnInit() {
    const uid = JSON.parse(localStorage.getItem('result'))[0];
    console.log(uid);
    return this.request.getUserwiseData(uid.id).subscribe((data) =>{
      console.log(data);


      this.results = data;});

  }

  edit(id){
    this.show=true;
    this.router.navigate(['/myblogss',id]);
  }

  update(id,blog){
    return this.request.updateData(id,blog)
      .subscribe((data) =>{
        this.result=data;
        this.show=false;
      })
  }

  deletePost(blog){
    this.request.deletePost(blog).subscribe();
    location.reload();
    this.router.navigate(['/myposts']);
  }

}
