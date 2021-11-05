import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData:FormGroup;
  hide = true;

  constructor(
    private fromBuilder:FormBuilder,
    private route:Router,
    private http:HttpClient) {
    this.loginData= this.fromBuilder.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
   }


  ngOnInit(): void {
  }

onSubmit(){
  console.log(this.loginData.value)
  this.http.get("http://localhost:8080//api-admin/login?email="+this.loginData.value.email+"&password="+this.loginData.value.password).subscribe(
     login_pass=>{

      if(login_pass != null)
      {
          // console.log(login_pass)
          this.route.navigate(['navbar'])
      }else{
        alert("Votre login ou password est incorrecte")
      }
     }
   )
  this.loginData.reset()
}
}
