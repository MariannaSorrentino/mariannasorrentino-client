import { Multimedia } from "./multimedia";
import { Album } from "./album";
import { Tappa } from './tappa';

export interface Viaggio {
    id?:number;
    nome?:string;
    titolo?:string;
    sottoTitolo?:string;
    sommario?:string;
    descrizione?:string;
    destinazione?:string
    tag?:string;
    url?:string;
    partenza?:String;
    ritorno?:String;
    multimedia?:Multimedia;
    album?:Album;
    tappe?:Tappa[];
}
