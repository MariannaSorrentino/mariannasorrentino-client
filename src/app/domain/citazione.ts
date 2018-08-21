import { Citazione } from '../interfaces/citazione';
export class CitazioneClass implements Citazione {
    id:number;
    commento:string;
    corpo:string;
    autore:string;
    libro:string;
    dataCreate:Date;
    
    constructor(){
        this.id =0;
        this.commento="";
        this.corpo="";
        this.autore="";
        this.libro="";
        this.dataCreate = new Date();
    }
}
