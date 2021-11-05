import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { GestionUsersComponent } from './gestion-users/gestion-users.component';
import { ModulePointageComponent } from './module-pointage/module-pointage.component';
import { AddFormateurComponent } from './add-formateur/add-formateur.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import {CdkTableModule} from '@angular/cdk/table';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { AddApprenantComponent } from './add-apprenant/add-apprenant.component';
import { ModifApprenantComponent } from './modif-apprenant/modif-apprenant.component';
import { ModifFormateurComponent } from './modif-formateur/modif-formateur.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GestionUsersComponent,
    ModulePointageComponent,
    AddFormateurComponent,
    NavbarComponent,
    AddApprenantComponent,
    ModifApprenantComponent,
    ModifFormateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatMenuModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatToolbarModule,
    MatCardModule,
    CdkTableModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
