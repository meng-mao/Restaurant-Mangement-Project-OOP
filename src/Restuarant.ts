import { TableManager } from "./Table/TableManager";
import { HumanManager } from "./Human/HumanManager";
import { FoodManager } from "./Food/FoodManager";
import { Manager } from "./Human/Manager/Manager";

export class Restuarant {
    public rooms: TableManager = new TableManager();
    public humans: HumanManager = new HumanManager();
    public foods: FoodManager = new FoodManager();
    private manager:Manager;
    constructor(
        protected name: string,
        protected address: string,
        protected openTime: string,
        protected closeTime: string,
    ) {
    }
    

}