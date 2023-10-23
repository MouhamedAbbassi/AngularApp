import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { DeleteEtudiantComponent } from './delete-etudiant/delete-etudiant.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';

const routes: Routes = [
   {path:"login", component:LoginComponent},
   {path:"register", component:RegisterComponent},
   {path:"listEtudiant", component:ListEtudiantComponent},
   {path:"delete/:id", component:DeleteEtudiantComponent},
   {path:"new", component:AddEtudiantComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
