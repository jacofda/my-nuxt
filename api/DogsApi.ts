import Axios from "axios";
import Dog, {DogDTO} from "@/types/Dog";

interface RequestInterface {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: DogDTO[]
}

export abstract class DogsApi {
  private static dogsAxios = Axios.create();

  static async getAllDogs(): Promise<Dog[]>{
    let response = await this.dogsAxios.get<RequestInterface>('http://localhost:3001/dogBreeds');
    return response.data.data.map(dogDto => new Dog(dogDto));
  }
}