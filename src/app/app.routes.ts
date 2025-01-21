import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {HomepageComponent} from '../homepage/homepage.component';
import {Pagina1Component} from '../pagina1/pagina1.component';
import {Pagina3Component} from '../pagina3/pagina3.component';

export const routes: Routes = [

  {path: '', component: HomepageComponent},
  {path: 'pag1', component: Pagina1Component},
  {path: 'pag2', component: Pagina3Component},
];
