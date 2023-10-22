import { Component } from '@angular/core';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.scss']
})
export class ListEtudiantComponent {
  etudiants: any;

  constructor(private es: EtudiantService) { }

  ngOnInit(): void {
    this.es.getAllData().subscribe((response) => {this.etudiants = response})
   }
}
