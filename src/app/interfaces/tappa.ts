import { Immagine } from "./immagine";
import { Album } from "./album";
import { Tappa } from './tappa';
import { Multimedia} from './multimedia';

export interface Tappa {
    id?:number;
    titolo?:string;
    sottoTitolo?:string;
    descrizione?:string;
    destinazione?:string
    tag?:string;
    url?:string;
    partenza?:String;
    ritorno?:String;
    multimedia?:Multimedia;
    album?:Multimedia[];
    tappe?:Tappa[];
}
