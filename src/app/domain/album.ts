import { MultimediaClass } from './multimedia';
import { Album } from '../interfaces/album';
import { Multimedia } from '../interfaces/multimedia';

export class AlbumClass implements Album {
    id:number;
    titolo:string;
    multimedia:Multimedia[];
    data:String;
    autore:String;

    constructor() { 
        this.id = 0;
        this.titolo = "";
        this.multimedia = [new MultimediaClass()];
        this.data ="";
        this.autore ="";
        
    }
}