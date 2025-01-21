import {Component, Input} from '@angular/core';
import {UnServizioService} from '../servizi/un-servizio.service';

@Component({
  selector: 'app-messaggini',
  imports: [],
  templateUrl: './messaggini.component.html',
  standalone: true,
  styleUrl: './messaggini.component.css'
})
export class MessagginiComponent {

  constructor(public mess:UnServizioService) {
  }
}
