import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContattiComponent } from './components/contatti/contatti.component';
import { HomeComponent } from './components/home/home.component';
import { LettureComponent } from './components/letture/letture.component';
import { ViaggiComponent } from './components/viaggi/viaggi.component';
import { AboutComponent } from './components/about/about.component';
import { CitazioniComponent } from './components/letture/citazioni/citazioni.component';
import { DettaglioViaggioComponent } from './components/viaggi/dettaglio-viaggio/dettaglio-viaggio.component';


const routes: Routes=[
  {
   path: '',
   component: HomeComponent
  },
  {
    path: 'contatti',
    component: ContattiComponent
   },
   {
    path: 'letture',
    component: LettureComponent
   }, 
   {
    path: 'viaggi',
    component: ViaggiComponent
   }, 
   {
    path: 'about',
    component: AboutComponent
   }, 
   {
    path: 'letture/citazioni',
    component: CitazioniComponent
   },
   {
     path: 'viaggi/dettaglio-viaggio/:nome',
     component:DettaglioViaggioComponent
   }
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    NgbModule

  ],
  exports:[RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {

 }
