import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParloConBackendService
{

  constructor(private http: HttpClient){}

  //il nostro servizio è l'unica parte del programma
  //che manda le request
  //tutto il resto chiama il servizio

  metodoCheFaRequestATuttiTravelers()
  {
    return this.http.get("/api/travelers");
  }

  metodoCheFaRequestSingoloTraveler(id:any)
  {
    return this.http.get(`/api/travelers/${id}`);
  }

  metodoCheFaRequestSingoloTravelerCon2path(id:any,type:any)
  {
    return this.http.get(`/api/travelers/${id}/${type}`);
  }

  metodoCheFaRequestDiInserimento(oggettoDaMettereNelBody:any)
  {
    return this.http.post('/api/travelers',oggettoDaMettereNelBody);
  }
}
