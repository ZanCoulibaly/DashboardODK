import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrls: ['./gestion-users.component.scss']
})
export class GestionUsersComponent implements OnInit {
  apprenants:any
  formateurs:any

  constructor(
    private router:Router,
    private http:HttpClient) {
      this.getAllApprenants()
      this.getAllFormateurs()
    }

  async deleteFormateur(id:any){
  await this.http.delete("http://localhost:8080/api/deleteFormateur/"+id, {responseType: 'text'}).subscribe(
      data=>{
        console.log(data)
        this.getAllFormateurs()
      }
    )
  }

  ngOnInit(): void {
  }

  deleteApprenant(id: any){
    this.http.delete("http://localhost:8080/api/deleteApprenant/"+id, {responseType: 'text'}).subscribe(
      result=>{
        console.log(result)
        this.getAllApprenants()
      }
    )
  }

  //Get all Apprenants ODK
  getAllApprenants()
  {
    this.http.get("http://localhost:8080/api/listApprenants").subscribe(
      list=>{
        // console.log(list)
        this.apprenants=list
      }
    );
  }

  //Get All ODK's Formateurs
  getAllFormateurs()
  {
    this.http.get("http://localhost:8080/api/getAllFormateurs").subscribe(
      liste=>{
        this.formateurs=liste
      }
    );
  }

  goToModifyApprenants(appId: any)
  {
    let navigationValue: NavigationExtras = {queryParams: {id: appId}}

    this.router.navigate(['modifApprenant'], navigationValue)
  }

  goToModifyFormateurs(formateurId: any){
    const navigationValue: NavigationExtras = {queryParams: {id: formateurId}}

    this.router.navigate(['modifFormateur'], navigationValue)
  }

}
