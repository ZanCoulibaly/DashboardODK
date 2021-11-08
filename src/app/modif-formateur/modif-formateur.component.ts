import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modif-formateur',
  templateUrl: './modif-formateur.component.html',
  styleUrls: ['./modif-formateur.component.scss']
})
export class ModifFormateurComponent implements OnInit {
  options: FormGroup
  formateur:any
  putBody: any
  idFormateur:any


  constructor(
    private http: HttpClient,
    private formbuilder: FormBuilder,
    private router: Router,
    private activedRoute: ActivatedRoute) {
      this.activedRoute.queryParams.subscribe(
        data=>{
          this.idFormateur = data.id
          this.getFormateurById(data.id)
          // console.log(data)
        }
      )

      this.options= this.formbuilder.group({
        nom:['', Validators.required],
        prenom:['', Validators.required],
        email:['', Validators.required],
        telephone:['', Validators.required],
        genre:['', Validators.required],
        age:['', Validators.required],

      })
    }

  ngOnInit(): void {
  }

  getFormateurById(formateurId: any)
  {
    this.http.get("http://localhost:8080/api/getFormateurById/"+formateurId).subscribe(
      result=>{
        // console.log(result)
        this.formateur = result
      }
    )
  }


  modifierFormateur()
  {
    this.putBody = {
      "formateurNom": ""+this.options.value.nom,
      "formateurPrenom": ""+this.options.value.prenom,
      "formateurAge": ""+this.options.value.age,
      "formateurGenre": ""+this.options.value.genre,
      "formateurEmail": ""+this.options.value.email,
      "formateurTelephone": ""+this.options.value.telephone,
    }
    this.http.put("http://localhost:8080/api/modifyFormateur/"+this.idFormateur, this.putBody, {responseType:'text'}).subscribe(
      data=>{
        // console.log(data)
        this.router.navigate(['gestion'])
      }
    )
  }
}
