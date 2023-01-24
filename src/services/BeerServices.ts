import { Beer, SearchOptions } from "../models/Beer";
import {
  beerDetailResponseToBeerObjectMapper,
  beerResponseToBeerArrayMapper
} from "../mapper/beerResponseToBeerArrayMapper";
const ROOT_URL = "https://api.punkapi.com/v2";
const getBeers = async (params:SearchOptions): Promise<Array<Beer>> => {
  let getBeersUrl = `${ROOT_URL}/beers?page=${params.page}&per_page=${params.per_page}`;
  if(params.beer_name) {
     getBeersUrl = `${ROOT_URL}/beers?beer_name=${params.beer_name}&page=${params.page}&per_page=${params.per_page}`;
  } else if(params.abv_gt){
    getBeersUrl = `${ROOT_URL}/beers?abv_gt=${params.abv_gt}&page=${params.page}&per_page=${params.per_page}`;
  } else if(params.abv_lt){
    getBeersUrl = `${ROOT_URL}/beers?abv_lt=${params.abv_lt}&page=${params.page}&per_page=${params.per_page}`;
  }
  const response = await fetch(getBeersUrl, {
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin':'*'
    }
  });
  const json = await response.json();
  return beerResponseToBeerArrayMapper(json);
};

const getBeerByBeerId = async (id: string): Promise<Beer> => {
  const getBeerByIdUrl = `${ROOT_URL}/beers/${id}`;
  const response = await fetch(getBeerByIdUrl);
  const json = await response.json();
  return beerDetailResponseToBeerObjectMapper(json);
};

const BeerServices = {
  getBeers,
  getBeerByBeerId,
};

export default BeerServices;
