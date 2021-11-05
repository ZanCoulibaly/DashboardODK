import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
      this.http.get("http://localhost:8080/api/listApprenants").subscribe(
        list=>{
          // console.log(list)
          this.apprenants=list
        }
      );
      this.http.get("http://localhost:8080/api/getAllFormateurs").subscribe(
        liste=>{
          this.formateurs=liste
        }
      );
     }

  ngOnInit(): void {
  }
  onClick(id: any){
    this.http.delete("http://localhost:8080/api/deleteApprenant/"+id, {responseType: 'text'}).subscribe(
      result=>{
        console.log(result)
      }
    )
  }
  supprimer(id:any){
    this.http.delete("http://localhost:8080/api/deleteFormateur/"+id).subscribe(
      data=>{
        console.log(data)
      }
    )
  }
}
