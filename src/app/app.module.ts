import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { HttpClientModule } from  '@angular/common/http';
import { DeleteEtudiantComponent } from './delete-etudiant/delete-etudiant.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    FooterComponent,
    ListEtudiantComponent,
    DeleteEtudiantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
