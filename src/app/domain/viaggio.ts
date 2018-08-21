import { MultimediaClass } from "./multimedia";
import { AlbumClass } from "./album";
import { TappaClass } from './tappa';
import { Viaggio } from '../interfaces/viaggio';
import { Tappa } from '../interfaces/tappa';
import { Album } from '../interfaces/album';
import { Multimedia } from '../interfaces/multimedia';

export class ViaggioClass implements Viaggio {
    id:number;
    nome:string;
    titolo:string;
    sottoTitolo:string;
    sommario:string;
    descrizione:string;
    destinazione:string
    tag:string;
    url:string;
    partenza:String;
    ritorno:String;
    multimedia:Multimedia;
    album:Album;
    tappe:Tappa[];
    
    constructor(){
        this.id=0;
        this.nome="";
        this.titolo ="";
        this.sottoTitolo="";
        this.sommario="";
        this.descrizione="";
        this.destinazione="";
        this.tag="";
        this.url="";
        this.partenza="";
        this.ritorno="";
        this.multimedia= new MultimediaClass();
        this.album= new AlbumClass();
        this.tappe =[new TappaClass()];
    }
}
