import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modif-apprenant',
  templateUrl: './modif-apprenant.component.html',
  styleUrls: ['./modif-apprenant.component.scss']
})
export class ModifApprenantComponent implements OnInit {
  options: FormGroup
  putBody:any
  idApp: any
  apprenant: any

  constructor(private http: HttpClient, private formbuilder: FormBuilder, private router: Router, private activedRoute: ActivatedRoute) {
    this.activedRoute.queryParams.subscribe(
      res=>{
        this.idApp = res
        console.log(this.idApp)
        this.getApprenantById(this.idApp.id)
      }
    )

    this.options= this.formbuilder.group({
      nom:['', Validators.required],
      prenom:['', Validators.required],
      email:['', Validators.required],
      telephone:['', Validators.required],
      genre:['', Validators.required],
      password:['', Validators.required],
      status:['', Validators.required],
      age:['', Validators.required],
      login:['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  getApprenantById(appId: any)
  {
    this.http.get("http://localhost:8080/api/getInfoApprenantById/"+appId).subscribe(
      result=>{
        // console.log(result)
        this.apprenant = result
      }
    )
  }

  modifyApprenant()
  {
    this.putBody = {
      "apprenantNom": ""+this.options.value.nom,
      "apprenantPrenom": ""+this.options.value.prenom,
      "apprenantAge": ""+this.options.value.age,
      "apprenantGenre": ""+this.options.value.genre,
      "apprenantEmail": ""+this.options.value.email,
      "apprenantLogin": ""+this.options.value.login,
      "apprenantStatus": ""+this.options.value.status,
      "apprenantPassword": ""+this.options.value.password,
      "apprenantTelephone": ""+this.options.value.telephone,
      "listePresences": []
    }
    // console.log(this.options.value)
    this.http.put("http://localhost:8080/api/modifyApprenant/"+this.idApp.id, this.putBody).subscribe(
      data=>{
        // console.log(data)
        this.router.navigate(['gestion'])
      }
    )
  }
}
