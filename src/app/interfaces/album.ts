import { Multimedia } from './multimedia';

export interface Album{
    id?:number;
    titolo?:string;
    multimedia?:Multimedia[];
    data?:String;
    autore?:String;

    
}