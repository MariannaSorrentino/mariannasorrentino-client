import { Multimedia } from './multimedia';

export interface Sezione {
   id?:number;
   nome?:string;
   descrizione?:string;
   progressivoPresentazione?:number;
   etichetta?:string;
   attiva?:boolean;
   visibile?:boolean;
   url?:string;
   multimedia?:Multimedia;
}
