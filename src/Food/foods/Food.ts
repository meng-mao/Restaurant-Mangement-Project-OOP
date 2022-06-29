
export enum FoodCategory {
    Fried ="Fried",
    Soup = "Soup",
    Boil = "Boil",
    Mix = "Mix",
    Drink ="Drink",
    Vegetale = "Vegetable",
    Fruit = "Fruit",
  }

export class Food {
    constructor(public name:string, public price:number,public category:FoodCategory){}  
}