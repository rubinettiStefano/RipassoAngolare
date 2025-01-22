import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {UnServizioService} from '../servizi/un-servizio.service';
import {ParloConBackendService} from '../servizi/parlo-con-backend.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-pagina1',
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './pagina1.component.html',
  standalone: true,
  styleUrl: './pagina1.component.css'
})
export class Pagina1Component
{

  travelers:any = null;

  singoloTravelers:any = null;

  constructor(private mess:UnServizioService,private servHttp:ParloConBackendService) {

    servHttp.metodoCheFaRequestSingoloTraveler(2)
      .subscribe(
        body =>
        {
          this.singoloTravelers = body;
        }
      );

    let oggettoDaJsonizzare =
      {
        name:"Pippo",
        surname:"Paperino",
        address:"Paperopoli",
        email:"aaa@bbbb.com",
        phone:"aaaaaaaa12",
        profession:"cane",
        dob:"2001-01-01"
      };

    servHttp.metodoCheFaRequestDiInserimento(oggettoDaJsonizzare).subscribe();

  }
  messaggio = "";
  spedisci() {
    this.mess.setMessaggio(this.messaggio);
    this.messaggio = "";
  }





}
