import { Component } from '@angular/core';
import { EtudiantService } from '../services/etudiant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Etudiant } from '../model/Etudiant';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.scss']
})
export class UpdateEtudiantComponent {
  constructor(private actRoute:ActivatedRoute,private es: EtudiantService, private router: Router) { }
  idEtudiant!:Number;
  etudiant!:Etudiant;
  updateForm!:FormGroup;


  ngOnInit(): void {
    this.getParam();
    this.es.getIdEtudiant(this.idEtudiant).subscribe((data)=>{this.etudiant=data

      this.updateForm=new FormGroup({
        nomEt:new FormControl(this.etudiant.nomEt),
        prenomEt:new FormControl(this.etudiant.prenomEt),
        ecole:new FormControl(this.etudiant.ecole),
        cin:new FormControl(this.etudiant.cin),
        dateNaissance:new FormControl(this.etudiant.dateNaissance)
      });

      console.log(this.etudiant);
    });
  }

  update(){
    this.etudiant.nomEt = this.updateForm.value.nomEt;
    this.etudiant.prenomEt = this.updateForm.value.prenomEt;
    this.etudiant.ecole = this.updateForm.value.ecole;
    this.etudiant.cin = this.updateForm.value.cin;
    this.etudiant.dateNaissance = this.updateForm.value.dateNaissance;
    this.es.updateEtudiant(this.idEtudiant,this.etudiant).subscribe(
      ()=>this.router.navigate(['/listEtudiant'])
    )
    console.log(this.etudiant);
  }


  getParam(){
    //this.id= Number( this.actR.snapshot.paramMap.get('param'));
    this.actRoute.paramMap.subscribe(data => this.idEtudiant=Number(data.get('param')));
   }

}
