import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ContattiComponent } from './components/contatti/contatti.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LettureComponent } from './components/letture/letture.component';
import { ViaggiComponent } from './components/viaggi/viaggi.component';
import { CitazioniComponent } from './components/letture/citazioni/citazioni.component';
import { DettaglioViaggioComponent } from './components/viaggi/dettaglio-viaggio/dettaglio-viaggio.component';
import { CuriositaComponent } from './components/curiosita/curiosita.component';

import { ContenutiService } from './services/contenuti.service';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ContattiComponent,
    HomeComponent,
    AboutComponent,
    LettureComponent,
    ViaggiComponent,
    CitazioniComponent,
    DettaglioViaggioComponent,
    CuriositaComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [ContenutiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
