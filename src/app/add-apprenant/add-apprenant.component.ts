import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-apprenant',
  templateUrl: './add-apprenant.component.html',
  styleUrls: ['./add-apprenant.component.scss']
})
export class AddApprenantComponent implements OnInit {
  options: FormGroup;
  postBody:any

  constructor(private fb: FormBuilder, private http:HttpClient, private router:Router) {
    this.options=this.fb.group({
      nom: ['', Validators.required],
      prenom:['', Validators.required],
      email:['', Validators.required],
      telephone:['', Validators.required],
      genre:['', Validators.required],
      age:['', Validators.required],
      dateCreation:['', Validators.required],
      dateModification:['', Validators.required],
      status:['', Validators.required],
      login:['', Validators.required],
      password:['', Validators.required]
    })
  }

  ngOnInit(): void {
  }
  addApprenant(){
    this.postBody = {
        "apprenantNom": ""+this.options.value.nom,
        "apprenantPrenom": ""+this.options.value.prenom,
        "apprenantAge": ""+this.options.value.age,
        "apprenantGenre": ""+this.options.value.genre,
        "apprenantEmail": ""+this.options.value.email,
        "apprenantLogin": ""+this.options.value.login,
        "apprenantStatus": ""+this.options.value.status,
        "apprenantPassword": ""+this.options.value.password,
        "apprenantTelephone": ""+this.options.value.telephone,
        "dateCreation": ""+this.options.value.dateCreation,
        "dateModification": ""+this.options.value.dateModification,
        "listePresences": []
    }
    // console.log(this.postBody)
    this.http.post("http://localhost:8080/api/addApprenant", this.postBody, {responseType:"text"}).subscribe(
      data=>{
        // console.log(data)
        this.router.navigate(['gestion'])
      }
    )

    this.options.reset()
  }
}
