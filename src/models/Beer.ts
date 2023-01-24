export interface Beer {
    id: number;
    name: string;
    tagline: string;
    first_brewed: string;
    description: string;
    image_url: string;
    abv:number;
    ibu: number;
    target_fg: number;
    target_og: number;
    ebc:number;
    srm:number;
    ph:number;
    attenuation_level: number;
    volume: Volume;
    boil_volume: Volume;
    method: Method;
    ingredients: Ingredients;
    food_pairing: Array<string>;
    brewers_tips: string;
    contributed_by:string;
}

export interface Volume {
    value: number;
    unit: string;
}
export interface MethodItem {
    temp:Volume;
    duration?: null;
}
export interface Method {
    mash_temp:Array<MethodItem>;
    fermentation: MethodItem
    twist?: null
}

export interface IngredientsItem {
    name: string;
    amount: Volume;
}

export type Ingredients = {
    malt:Array<IngredientsItem>;
    hops: Array<IngredientsItem>;
    yeast:string;
}

export interface SearchOptions {
    beer_name? :string;
    abv_gt?: number;
    abv_lt?: number;
    page: number;
    per_page: number;
}
