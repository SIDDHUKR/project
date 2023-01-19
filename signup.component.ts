// import { Component , OnInit } from '@angular/core';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent implements OnInit {

// }

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm!:FormGroup;
constructor(private formBuilder:FormBuilder, private api:ApiService,private http:HttpClient, private router:Router) {}
  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      fullname:[''],
      email:[''], 
      password:[''],
      mobile:[''],
    })
}
signUp(){
  this.http.post<any>("http://localhost:3000/signupUsers",this.signupForm.value)
  .subscribe(res=>{
    alert("signup successfull");
    this.signupForm.reset();
    this.router.navigate(['login']);
  },
  err=>{
    alert("invalid id or password");
  }
  )
}
}
