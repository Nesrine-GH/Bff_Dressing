import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  constructor(private http: HttpClient) { }
  addCommande(commande: any) {
    commande.status = 'CREATED';
    return this.http.post("http://localhost:8080/commandes", commande);
  }
  getAllCommandes() {
    return this.http.get("http://localhost:8080/commandes");
  }
  validateCommande(id: string) {
    const patch = { status: 'VALIDATED' }
    return this.http.patch("http://localhost:8080/commandes/" + id,
      patch)
  }
  annulerCommande(id: string) {
    const patch = { status: 'CANCLLED' }
    return this.http.patch("http://localhost:8080/commandes/" + id,
      patch)
  }
}








