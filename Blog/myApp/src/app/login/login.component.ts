import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../service.service";
import {Router} from "@angular/router";


// interface User{
//   "id":number,
//   "name":string,
//   "password":string,
//   "blog":object[]
// }
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  result: any;
  name: string;
  password: string;

  constructor(private request: ServiceService, private router: Router) {
  }

  // user:User={id:null, name:"",password:"", blog:[]}

  ngOnInit() {


  }

  loginuser() {

    this.request.loginUser(this.name, this.password)
      .subscribe(res => {
        this.result = res;
        console.log(this.result.length);

        if (this.result.length == 0) {
          alert("Incorrect password or username");
          this.router.navigateByUrl('/login');
        }
        else {
          console.log(this.result);
          localStorage.setItem('result', JSON.stringify(this.result));
          this.router.navigateByUrl('/myblog');
        }

      });
  }

}
