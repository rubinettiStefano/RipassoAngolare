import {Component, OnInit} from '@angular/core';
import {UnServizioService} from '../servizi/un-servizio.service';

@Component({
  selector: 'app-pagina3',
  imports: [],
  templateUrl: './pagina3.component.html',
  standalone: true,
  styleUrl: './pagina3.component.css'
})
export class Pagina3Component implements OnInit{
  constructor(private mess:UnServizioService) {
  }

  ngOnInit(): void {

    this.mess.setMessaggio("EVVIVA, SONO NATO")
  }

}
