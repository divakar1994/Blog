import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-myblog',
  templateUrl: './myblog.component.html',
  styleUrls: ['./myblog.component.css']
})
export class MyblogComponent implements OnInit {

  constructor(private request:ServiceService,private router:Router) { }
  results:any;
  ngOnInit() {
    const uid = localStorage.getItem('result');
    console.log(uid);
    if ( !(uid === null || !uid || uid === '' || uid === ' ') )
      this.request.getData()
        .subscribe((data) => {
          this.results = data;

        });

    else {
      alert("This id does not exists ")
      console.log("no id")
      // this.router.navigateByUrl('/login');

    }


  }

}
