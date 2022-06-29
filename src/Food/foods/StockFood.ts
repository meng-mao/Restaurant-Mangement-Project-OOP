import { Food } from "./Food";

export class StockFood {
    constructor(private foods: Food[] = []) { }
    addFood(...food: Food[]) {
        this.foods = this.foods.concat(food);
    }
    hasFood(){
        return this.foods.length !== 0;
    }
    numberCategory(food:Food){
        let numCategory = 0;
        for(let categoy of this.foods){
            if(categoy.category === food.category){
                numCategory +=1;
            }
        }
        return numCategory;
    }
    
}