import { Person, Gender } from "../Person";
import { StockFood } from "../../Food/foods/StockFood";
import { Food } from "../../Food/foods/Food";
import { Chair } from "../../Table/Chair";
export enum RateCustomer {
    rate1 = "This food is very bad, I can not eat it",
    rate2 = "Oh! I don't like it, its taste so awful",
    rate3 = "Hmm!! it's not bad, but I won't eat it ",
    rate4 = "it's okay, but sorry, I could go home",
    rate5 = "That's okay",
    rate6 = "Yes, it's good taste",
    rate7 = "Oh !! I like it",
    rate8 = "OMG very great food",
    rate9 = "Oh No!! amazing dish!! please add more ",
    rate10 = "Oh!! is it really?? the best food that I love to eat",
}
export class Customer extends Person {
    constructor(id: number, name: string, age: number, gender: Gender, private money: number) {
        super(name, age, gender);
    }
    orderAndPaymentFood(foods:Food[]){
        let totalPrice = 0;
        let tax = 0;
        let paid = 0;
        for(let food of foods){
            tax +=1;
            totalPrice += food.price;
        }
        if(totalPrice <= this.money && foods.length !== 0){
            let cusMoney = this.money;
            paid = cusMoney - totalPrice;
            this.money = cusMoney - (totalPrice +( tax*0.25)+2);
            return "\n"+"_____Ordered Successfully_____"+"\n"
            +"  __Meng Sopheap Restaurant__"+"\n"
            +"\n"+" Order ID : "+"\n"+" Ordered In :.......... "+" 1.15 PM"+
            "\n"+" Server :.......... "+" 6/28/2022"+"\n"+
            " Quantity : "+foods.length+" packages"+"\n"
            +"\n"+" ==> SubTotal :......... "+totalPrice+"$"+"\n"+
            " ==> Tax :.............. "+(tax * 0.25)+"$"+"\n"+
            " ==> Delivery :.......... "+2+"$"+"\n"+
            " ==> Total Price :.......... "+(totalPrice +( tax*0.25)+2+"$");
        }
        else{
            return "Sorry, Please try to order again!!";
    
        }
    }
    rateCustomer(number: number) {
        let rate = "";
        if (number === 1) {
            rate = RateCustomer.rate1;
        }
        if (number === 2) {
            rate = RateCustomer.rate2;
        }
        if (number === 3) {
            rate = RateCustomer.rate3;
        }
        if (number === 4) {
            rate = RateCustomer.rate4;
        }
        if (number === 5) {
            rate = RateCustomer.rate5;
        }
        if (number === 6) {
            rate = RateCustomer.rate6;
        }
        if (number === 7) {
            rate = RateCustomer.rate7;
        }
        if (number === 8) {
            rate = RateCustomer.rate8;
        }
        if (number === 9) {
            rate = RateCustomer.rate9;
        }
        if (number === 10) {
            rate = RateCustomer.rate10;
        }
        return rate;
    }
    buyFood(food: Food) {
        if (food.price <= this.money) {
            return "You buy successfully";
        }
        else {
            return "You don't have enough money";
        }
    }
    eatFood(food: Food, chair: Chair) {
        if (food.price <= this.money && chair.hasCustomer() === false) {
            return "Welcome to eat food in the restaurant"
        }
        else {
            return "Sorry You can not eat food in the restaurant!"
        }
    }

}