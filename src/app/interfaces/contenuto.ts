import {Multimedia} from './multimedia';

export interface Contenuto {
    id?:number;
    sezione?:string;
    titolo?:string;
    corpo?:string;
    lingua?:string;
    attivo?:boolean;
    tsCreazione?:Date;
    autore?:string;
    commento?:string;
    multimedia?:Multimedia,
    album?:Multimedia[];
    campi?:string[];
    links?:string[];
}