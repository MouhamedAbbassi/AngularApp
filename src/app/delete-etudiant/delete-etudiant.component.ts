import { Component } from '@angular/core';
import { EtudiantService } from '../services/etudiant.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-delete-etudiant',
  templateUrl: './delete-etudiant.component.html',
  styleUrls: ['./delete-etudiant.component.scss']
})
export class DeleteEtudiantComponent {


  constructor(private es:EtudiantService,private ac:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.es.deleteEtudiant(this.ac.snapshot.params['id']).subscribe(
      ()=>
        this.router.navigate(['listEtudiant'])
    )

  }
}
