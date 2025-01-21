import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {UnServizioService} from '../servizi/un-servizio.service';

@Component({
  selector: 'app-pagina1',
  imports: [
    FormsModule
  ],
  templateUrl: './pagina1.component.html',
  standalone: true,
  styleUrl: './pagina1.component.css'
})
export class Pagina1Component
{
  constructor(private mess:UnServizioService) {
  }

  messaggio = "";


  spedisci() {

    this.mess.setMessaggio(this.messaggio);
    this.messaggio = "";
  }
}
