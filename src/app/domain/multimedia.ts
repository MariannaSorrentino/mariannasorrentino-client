import { Multimedia} from '../interfaces/multimedia';

export class MultimediaClass implements Multimedia{
    
     id:number;
     tipo:string;
     titolo:string;
     url:string;
     urls:[string];
     alt:string;
     data:string;
     luogo:string;
     autore:string;

     constructor(){
         this.id = 0;
         this.tipo = "";
         this.titolo = "";
         this.url = "";
         this.urls = [""];
         this.alt ="";
         this.data = "";
         this.luogo ="";
         this.autore ="";
     }
}