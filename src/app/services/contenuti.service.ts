import { Injectable } from '@angular/core';
import { Citazione } from  '../interfaces/citazione'; 
import { Contenuto } from '../interfaces/contenuto';
import { Viaggio} from '../interfaces/viaggio';
import { Sezione } from '../interfaces/sezione';
import { Tappa } from '../interfaces/tappa';
import { Immagine } from '../interfaces/immagine';
import { Album } from '../interfaces/album';
import { config } from '../../config/config' ;

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ContenutiService{
  

  private URL_CITAZIONI: string;
  private URL_CONTENUTI: string;
  private URL_SEZIONI: string;
  private URL_VIAGGI: string;

  
  constructor(private http:HttpClient, private auth:AuthService) { 
    this.URL_CITAZIONI = config['URL-CITAZIONI-APP-SERVER'];
    this.URL_CONTENUTI = config['URL-CONTENUTI-APP-SERVER'];
    this.URL_SEZIONI = config['URL-SEZIONI-APP-SERVER'];
    this.URL_VIAGGI = config['URL-VIAGGI-APP-SERVER'];
  }

  contenuti: Contenuto[] = [
    {
      id:1,
      titolo:`Home`,
      sezione:'home',
      corpo:`<span>"Nessuno, mai, riesce a dare l’esatta misura di ciò che pensa, di ciò che soffre, 
             della necessità che lo incalza, e la parola umana è spesso come un pentolino di latta 
             su cui andiamo battendo melodie da far ballare gli orsi mentre vorremmo intenerire le stelle.</span>
             <p class="card-text"><small class="text-muted float-right">Gustave Flaubert, Madame Bovary</small></p>`,
      lingua:'it',
      attivo:true,
      tsCreazione:new Date(),
      multimedia:{
        id:1,
        tipo:'img',
        titolo:`Home`,
        url:`../../../images/home/img/1.jpg`,
        alt:`Home`,
        data: '07/08/2018',
        luogo:`Praga`,
        autore:`Manolo Eminenti`
      }
    },
    {
      id:2,
      titolo:`Letture`,
      sezione:'letture',
      corpo:`Questa sezione muove dallo spirito del libro "Una certa idea di Mondo" di Alessandro Baricco, che lo
      stesso così sintetizza:<br><br>
      “Mi son ricordato di una cosa che ho imparato dai vecchi: falli parlare di quello che veramente conoscono e amano, 
      e capirai cosa pensano del mondo. (Chiedigli come come si immaginano il Paradiso, se vuoi capire cosa pensano della
      vita: non so più chi l'ha detta, ma è vera.)
      Io di cose che conosco davvero, e amo senza smettere mai, ne ho due o tre. Una è i libri. 
      Mi è venuta un giorno questa idea: che se solo mi fossi messo lì a parlare di loro, prendendone uno per volta, 
      solo quelli belli, senza smettere per un po’ – be’, ne sarebbe venuta fuori innanzitutto una certa idea di mondo. 
      C’erano buone possibilità che fosse la mia.”
      <br><br>Con proposito affine citerò quei brani di letture che hanno lasciato memoria nella mia coscienza.`,
      lingua:'it',
      attivo:true,
      tsCreazione:new Date(),
      links:['/letture/citazioni'],
      multimedia:{
        id:1,
        tipo:'img',
        titolo:`Letture`,
        url:`../../../images/letture/img/1.jpg`,
        alt:`Letture`,
        data: '07/06/2018',
        luogo:`San Cassiano`,
        autore:`Marianna Sorrentino`
      }
    },
    {
      id:3,
      titolo:`About`,
      sezione:'about',
      corpo:`E' davvero difficile l'arte del definire: si fa fatica a dire delle cose
      semplici, tanto più di se stessi; eppure credo, non ci sia niente di più
      rassicurante di una definizione. Questa ha il potere di trasformare l'ignoto
      in conoscenza e tanto basta a svelarne l'intrinseca potenza.
      <br>
      Digressioni a parte, quanto segue é un modesto e leale tentativo di sintetica
      autodefinizione.
      <br><br>
      Inizio col dire così...
      <br><br>
      Nessun talento speciale da segnalare, ma una certa dose di vorace curiosità.
      <br>
      Laureata in Matematica all'Università di Siena mi appassiona la ricerca di 
      soluzioni e l'apprendimento delle ultimissime tecniche di programmazione.
      Al momento sono focalizzata sui framework a base JavaScript.
      Quando non sono completamente assorbita da qualche progetto, dedico tempo 
      alla lettura, allo sport e alle carte da gioco del bridge.
      <br><br>
      Ah, dimenticavo: ho un caratteraccio!`,
      lingua:'it',
      attivo:true,
      tsCreazione:new Date(),
      multimedia:{
        id:1,
        tipo:'img',
        titolo:`About`,
        url:`../../../images/about/img/1.jpg`,
        alt:`About`,
        data: '26/07/2015',
        luogo:`Indonesia`,
        autore:`Manolo Eminenti`
      }
    },
    {
      id:4,
      titolo:`Viaggi`,
      sezione:'viaggi',
      corpo:`<span>"Un luogo non è mai solo “quel” luogo: quel luogo siamo un po’ anche noi. In qualche modo, senza saperlo, 
      ce lo portavamo dentro e un giorno, per caso, ci siamo arrivati."</span>
      <p class="card-text"><small class="text-muted float-right">Antonio Tabucchi, Viaggi e altri viaggi</small></p>`,
      lingua:'it',
      attivo:true,
      tsCreazione:new Date(),
      multimedia:{
        id:1,
        tipo:'img',
        titolo:`Viaggi`,
        url:`../../../images/viaggi/img/1.jpg`,
        alt:`Viaggi`,
        data: '26/4/2018',
        luogo:`Tenerife`,
        autore:`Marianna Sorrentino`
      },
      links:[`/viaggi/dettaglio-viaggio`]
    },
    {
    id:5,
    titolo:`Contatti`,
    sezione:'contatti',
    corpo:``,
    lingua:'it',
    attivo:true,
    tsCreazione:new Date(),
    campi:['Marianna Sorrentino',
           'Firenze - Italia',
           'mailto:info@mariannasorrentino.com',
           'info@mariannasorrentino.com',
           'http://www.mariannasorrentino.com',
           'mariannasorrentino.com'],
    multimedia:{
      id:1,
      tipo:'img',
      titolo:`Contatti`,
      url:`../../../images/contatti/img/1.jpg`,
      alt:`Contatti`,
      data: '26/04/2018',
      luogo:`Tenerife`,
      autore:`Alessandra Sorrentino`
    }
  }];

  sezioni: Sezione [] = [
    {
      id:1,
      nome:`Home`,
      descrizione:`Sezione principale`,
      progressivoPresentazione: 1,
      etichetta:`Home`,
      attiva:true,
      visibile:false,
      url:`/`
    },
    {
      id:2,
      nome:`Letture`,
      descrizione:`Sezione letture`,
      progressivoPresentazione: 2,
      etichetta:`Letture`,
      attiva:true,
      visibile:true,
      url:`/letture`
    },
    {
      id:3,
      nome:`Viaggi`,
      descrizione:`Sezione viaggi`,
      progressivoPresentazione: 3,
      etichetta:`Viaggi`,
      attiva:true,
      visibile:true,
      url:`/viaggi`
    },  
    {
      id:4,
      nome:`About`,
      descrizione:`Sezione about`,
      progressivoPresentazione: 4,
      etichetta:`About`,
      attiva:true,
      visibile:true,
      url:`/about`
    },
    {
      id:5,
      nome:`Contatti`,
      descrizione:`Sezione contatti`,
      progressivoPresentazione: 5,
      etichetta:`Contatti`,
      attiva:true,
      visibile:true,
      url:`/contatti`
    },
    {
      id:6,
      nome:`Attitudine`,
      descrizione:`Sezione attitudine`,
      progressivoPresentazione: 6,
      etichetta:`Attitudine`,
      attiva:false,
      visibile:false,
      url:`/attitudine`
    }
  ];

  getCitazioniServer(){
      return this.http.get(this.URL_CITAZIONI, { headers : this.auth.getAuthHeader()});
  }

  getContenutiServer(){
    return this.http.get(this.URL_CONTENUTI, { headers : this.auth.getAuthHeader()});
  }

  getContenuto(sezione:string):Contenuto{
    return this.contenuti.find((contenuto)=>{return contenuto.sezione === sezione});
  }
  getSezioniDaMostrare():Sezione[]{
    return this.sezioni.filter(sez => sez.attiva && sez.visibile);
  }
  getSezioniServer(){
    return this.http.get(this.URL_SEZIONI, { headers : this.auth.getAuthHeader()}); 
  }
  getViaggiServer(){
    return this.http.get(this.URL_VIAGGI, { headers : this.auth.getAuthHeader()});
  }
}