import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnServizioService {

  messaggioDaMostrare = "";

  setMessaggio(nuovo:string)
  {
    this.messaggioDaMostrare = nuovo;
  }

  getMessaggio():string
  {
    return this.messaggioDaMostrare;
  }

}
