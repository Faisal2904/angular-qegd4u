import{Ingredient} from '../shared/ingredient.model'
export class Recepie{
  public name:string;
  public description:string;
  public imagePath:string;
  public ingredient:Ingredient[];

  constructor(name,desc,imagePath,ingredients:Ingredient[]){
    this.name=name;
    this.description=desc;
    this.imagePath=imagePath;
    this.ingredient=ingredients;
  }


}