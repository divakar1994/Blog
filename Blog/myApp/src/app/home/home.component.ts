import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../service.service";


interface Blog {

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  results:any;

  constructor(private request: ServiceService) {
  }

  ngOnInit() {
    this.request.getData()
      .subscribe((data) => {
        console.log(data);
        this.results = data;
      });
  }

}
