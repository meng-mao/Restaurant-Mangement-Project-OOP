import { Chair } from "./Chair";

export class Table {
    constructor(private chairs:Chair[]=[]){}
    addChair(...chair:Chair[]){
        this.chairs= this.chairs.concat(chair);
    }
}