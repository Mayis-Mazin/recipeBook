export class Recipe {
  name: string;
  description: string;
  imagPath: string;

  constructor(name, description, imagPath) {
    this.description = description;
    this.name = name;
    this.imagPath = imagPath;
  }
}
