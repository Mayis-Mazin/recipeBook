import { Ingrediant } from './../shared/ingredient.model';
export class Recipe {

  public name: string;
  public description: string;
  public imagPath: string;
  public ingrediants:Ingrediant[]

  constructor(name, description, imagPath, ingrediants:Ingrediant[]) {

    this.description = description;
    this.name = name;
    this.imagPath = imagPath;
    this.ingrediants=ingrediants;
  }
}
