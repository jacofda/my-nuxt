export default interface IDog {
    id?: number;
    slug: string;
    breed: string;
    breedType: "Purebred" | "Mix";
    origin: string;
    popularity: string;
    temperament: string[];
    hypoallergenic: "Yes" | "No";
    intelligence: number;
    photo: string;
}

export class DogDTO implements IDog{
    id?: number;
    slug: string = '';
    breed: string = '';
    breedType: "Purebred" | "Mix" = 'Mix';
    origin: string = '';
    popularity: string = '';
    temperament: string[] = [];
    hypoallergenic: "Yes" | "No" = "Yes"
    intelligence: number = 1
    photo: string = '';
  }

  export default class Dog extends DogDTO {
    constructor(dto: DogDTO){
      super();
      Object.assign(this, dto);
    }
  }