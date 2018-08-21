
import { AlbumClass } from "./album";
import { Tappa } from '../interfaces/tappa';
import { MultimediaClass} from './multimedia';
import { Multimedia } from '../interfaces/multimedia';
import { Album } from '../interfaces/album';

export class TappaClass implements Tappa {
    id:number;
    titolo:string;
    sottoTitolo:string;
    descrizione:string;
    destinazione:string
    tag:string;
    url:string;
    partenza:String;
    ritorno:String;
    multimedia:Multimedia;
    album:Multimedia[];
    tappe:Tappa[];
    
    constructor(){
        this.id =0;
        this.titolo ="";
        this.sottoTitolo="";
        this.descrizione="";
        this.destinazione="";
        this.tag="";
        this.url="";
        this.partenza="";
        this.ritorno="";
        this.multimedia = new MultimediaClass();
        this.album =[new MultimediaClass()];
    }
}
