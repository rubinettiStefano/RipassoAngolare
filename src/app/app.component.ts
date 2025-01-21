import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomepageComponent} from '../homepage/homepage.component';
import {NavbarComponent} from '../navbar/navbar.component';
import {MessagginiComponent} from '../messaggini/messaggini.component';
import {Pagina1Component} from '../pagina1/pagina1.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomepageComponent, NavbarComponent, MessagginiComponent, Pagina1Component],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RipassoAngolare';

  nuovoMessaggio = ""

  gestisciNuovoMessaggio($event:string) {
    this.nuovoMessaggio = $event;
  }
}
