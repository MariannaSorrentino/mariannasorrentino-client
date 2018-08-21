import { environment } from "../environments/environment";
import * as data from './config.json';


//per provare le API su app server prod - poi rimuovere
//environment.production = true;
const dataAmbiente = environment.production? data['prod'] : data['svil'];

const config = new Object();

Object.keys(dataAmbiente).forEach((key) => {
   config[key] = dataAmbiente[key];
});
export {config};