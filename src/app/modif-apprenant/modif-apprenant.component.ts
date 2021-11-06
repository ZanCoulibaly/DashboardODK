import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modif-apprenant',
  templateUrl: './modif-apprenant.component.html',
  styleUrls: ['./modif-apprenant.component.scss']
})
export class ModifApprenantComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
}
