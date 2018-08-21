import { MultimediaClass } from './multimedia';
import { Sezione } from '../interfaces/sezione';
import { Multimedia } from '../interfaces/multimedia';

export class SezioneClass implements Sezione {
   id:number;
   nome:string;
   descrizione:string;
   progressivoPresentazione:number;
   etichetta:string;
   attiva:boolean;
   visibile:boolean;
   url:string;
   multimedia:Multimedia;
   
   constructor(){
       this.id=0;
       this.nome="";
       this.descrizione="";
       this.progressivoPresentazione=0;
       this.etichetta="";
       this.attiva=false;
       this.visibile=false;
       this.url="";
       this.multimedia = new MultimediaClass();
   }
}
