import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public _AuthService: AuthService, public _Router: Router) { }
  ngOnInit(): void { }
  onSubmit(data: any) {
    console.log(data);
    this._AuthService.login(data).subscribe((res) => {
      console.log(res);
      if (res.success == true) {
        this._Router.navigate(['home'])
      }
      else {
        console.log('error');
      }
    }
    )
  }
}