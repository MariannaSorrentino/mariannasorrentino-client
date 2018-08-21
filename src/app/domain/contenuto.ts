import {Multimedia} from '../interfaces/multimedia';
import { Contenuto } from '../interfaces/contenuto';
import { MultimediaClass} from './multimedia';

export class ContenutoClass implements Contenuto {
    id:number;
    sezione:string;
    titolo:string;
    corpo:string;
    lingua:string;
    attivo:boolean;
    tsCreazione:Date;
    autore:string;
    commento:string;
    multimedia:Multimedia;
    album:Multimedia[];
    campi:string[];
    links:string[];

    constructor(){
        this.id = 0;
        this.sezione ="";
        this.titolo ="";
        this.corpo ="";
        this.lingua="";
        this.attivo=false;
        this.tsCreazione= new Date();
        this.autore="";
        this.commento="";
        this.multimedia = new MultimediaClass();
        this.album=[new MultimediaClass()];
        this.campi=["","","","","","","","","",""];
        this.links=["","","","","","","","","",""];
    }
}