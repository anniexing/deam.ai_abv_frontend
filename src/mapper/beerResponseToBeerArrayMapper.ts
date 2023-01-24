 import { Beer } from '../models/Beer';
export const beerResponseToBeerArrayMapper = (json:any):Beer[] => {
    return json as Beer[];
 }

 export const beerDetailResponseToBeerObjectMapper = (json:any):Beer => {
    let beer = null;
    if(json) {
         beer = json[0];
    }
     return beer
 }
