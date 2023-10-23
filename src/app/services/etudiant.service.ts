import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etudiant } from '../model/Etudiant';
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private baseUrl = 'http://localhost:3031/etudiant/getAll';
  constructor(private httpClient:HttpClient) { }


  getAllData(): Observable<Etudiant[]> {
    return this.httpClient.get<Etudiant[]> ('http://localhost:3031/etudiant/getAll');
  }

  deleteEtudiant(id:any) {
    return this.httpClient.delete('http://localhost:3031/etudiant/delete/'+id);
  }

  addEtudiant(etudiant: any) {
         return this.httpClient.post('http://localhost:3031/etudiant/new ', etudiant)
      }

}
