import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionUsersComponent } from './gestion-users/gestion-users.component';
import { AddFormateurComponent } from './add-formateur/add-formateur.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModulePointageComponent } from './module-pointage/module-pointage.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'formateur', component: AddFormateurComponent},
  {path:'gestion', component: GestionUsersComponent},
  {path:'home', component: HomeComponent},
  {path:'navbar', component: NavbarComponent},
  {path:'pointage', component: ModulePointageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
