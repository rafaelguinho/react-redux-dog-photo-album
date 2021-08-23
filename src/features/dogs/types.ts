export interface Breed {
    id: string;
    name: string;
    image: {
      url: string;
    };
  }
  
  export interface BreedSearch {
    id: string;
    name: string;
    reference_image_id: string;
  }
  
  export interface BreedImage {
    id: string;
    height: number;
    width: number;
    url: string;
  }

  export interface Weight {
    imperial: string;
    metric: string;
}

export interface Height {
    imperial: string;
    metric: string;
}

export interface BreedDetail {
    weight: Weight;
    height: Height;
    id: number;
    name: string;
    country_code: string;
    bred_for: string;
    breed_group: string;
    life_span: string;
    temperament: string;
    origin: string;
    reference_image_id: string;
}

export interface BreedDetailSearchResult {
    breeds: Breed[];
    id: string;
    url: string;
    width: number;
    height: number;
}