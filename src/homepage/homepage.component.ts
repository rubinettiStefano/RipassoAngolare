import {Component, OnInit} from '@angular/core';
import {NgStyle} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-homepage',
  imports: [
    NgStyle,
    FormsModule
  ],
  templateUrl: './homepage.component.html',
  standalone: true,
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit
{
  //lifecycle hooks

  //vengono istanziati
  //inizializzati
  //graficati
  //cambiano
  //vengono distrutti





  testo = "paperino";
  colore="red"
  linkImmagine="https://www.lavocedigenova.it/typo3temp/pics/c_0a067567cd.png"

  oggettoComplesso =
    {
      campo1:"valore1",
      immagine:"https://www.lavocedigenova.it/typo3temp/pics/c_0a067567cd.png"
    }

  cambiaColore()
  {
    this.colore="blue";
  }

  cambiaImmagine()
  {
    this.linkImmagine="https://upload.wikimedia.org/wikipedia/it/1/10/Copertina_Topolino_3294.jpg";
  }

  constructor() {
    console.log("sono il costruttore e sto creando il componente");
  }

  ngOnInit(): void
  {
    console.log("vengo richiamato appena il componente nasce")
  }
}
