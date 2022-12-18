import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public _AuthService: AuthService, public _Router: Router) { }
  ngOnInit(): void { }
  onSubmit(registerForm: any) {
      this._AuthService.register(registerForm).subscribe((res) => {
      if (res.success == true) {
      this._Router.navigate(['login'])} 
      else {
        console.log('error');
      }
      }
      )
    }
  
}












// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from '../auth.service';
  // error: string = '';
  // registerForm: FormGroup = new FormGroup({
  //   name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
  //   email: new FormControl(null, [Validators.required, Validators.email]),
  //   phone: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(10)]),
  //   password: new FormControl(null, [Validators.required]),
  // });

//   submitRegisterForm(registerForm: any) {
//     console.log(registerForm);

//     this._AuthService.register(registerForm.value).subscribe((res) => {
//       console.log(res);

//       if (res.success == true) {
// this._Router.navigate(['login'])} 
// else {
//   console.log('error');
//       }
//   })
//   }