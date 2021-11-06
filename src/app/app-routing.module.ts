import { ModifApprenantComponent } from './modif-apprenant/modif-apprenant.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionUsersComponent } from './gestion-users/gestion-users.component';
import { AddFormateurComponent } from './add-formateur/add-formateur.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModulePointageComponent } from './module-pointage/module-pointage.component';
import { AddApprenantComponent } from './add-apprenant/add-apprenant.component';
import { ModifFormateurComponent } from './modif-formateur/modif-formateur.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'formateur', component: AddFormateurComponent},
  {path:'gestion', component: GestionUsersComponent},
  {path:'navbar', component: NavbarComponent},
  {path:'pointage', component: ModulePointageComponent},
  {path:'apprenant', component: AddApprenantComponent},
  {path:'modifApprenant', component: ModifApprenantComponent},
  {path:'modifFormateur', component:ModifFormateurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
