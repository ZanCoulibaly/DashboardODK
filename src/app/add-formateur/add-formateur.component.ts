import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrls: ['./add-formateur.component.scss']
})
export class AddFormateurComponent implements OnInit {
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
      dateCreation:['', Validators.required]
    })
  }

  ngOnInit(): void {
  }
  addFormateur(){
    this.postBody = {
        "formateurNom": ""+this.options.value.nom,
        "formateurPrenom": ""+this.options.value.prenom,
        "formateurAge": ""+this.options.value.age,
        "formateurGenre": ""+this.options.value.genre,
        "formateurEmail": ""+this.options.value.email,
        "formateurTelephone": ""+this.options.value.telephone,
        "dateCreation": ""+this.options.value.dateCreation,
        "listePresences": []
    }
    // console.log(this.postBody)
    this.http.post("http://localhost:8080/api/addFormateur", this.postBody, {responseType:"text"}).subscribe(
      result=>{
        // console.log(result)
        this.router.navigate(['gestion'])
      }
    )

    this.options.reset()
  }

}
