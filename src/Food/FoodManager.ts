import { Food } from "./foods/Food";
import {StockFood} from "./foods/StockFood";

export class FoodManager {
    private foods:Food[]=[];

    addFood(...food:Food[]){
        this.foods = this.foods.concat(food);
    }
}