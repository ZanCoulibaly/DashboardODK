import { Component, OnInit } from '@angular/core';

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

  constructor(private fromBuilder:FormBuilder, private route:Router) {
    this.loginData= this.fromBuilder.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
   }


  ngOnInit(): void {
  }

onSubmit(){
  console.log(this.loginData.value)
  this.loginData.reset()
}
}
