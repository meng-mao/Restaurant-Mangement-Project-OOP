import { FoodManager } from "./Food/FoodManager";
import { Food, FoodCategory } from "./Food/foods/Food";
import { StockFood } from "./Food/foods/StockFood";
import { Customer } from "./Human/Customer/Customer";
import { HumanManager } from "./Human/HumanManager";
import { Gender } from "./Human/Person";
import { Staff, StaffCategory } from "./Human/Staff/Staff";
import { Restuarant } from "./Restuarant";
import { Chair } from "./Table/Chair";
import { Table } from "./Table/Table";
import { Manager } from "./Human/Manager/Manager";
/**
 *  Restaurant of Meng and Sopheap
 */
let mengSopheapRestaurant = new Restuarant("MengPheap", "Phnom Penh", "8AM", "9PM");
/**
 *  All of Boss, Manager and staffes
 */
let waiter1 = new Staff(StaffCategory.Waiter, "Chaiya Phai", 20, Gender.MALE, 99989, 340);
let waiter2 = new Staff(StaffCategory.Waiter, "Samoul Vann", 24, Gender.MALE, 97678, 350);
let chef1 = new Staff(StaffCategory.Chef, "Sophy Soeuy", 24, Gender.FEMALE, 976678, 850);
let chef2 = new Staff(StaffCategory.Chef, "Koev Song", 24, Gender.FEMALE, 947678, 850);
let chef3 = new Staff(StaffCategory.Chef, "Oun Bav", 25, Gender.MALE, 976578, 850);
let chef4 = new Staff(StaffCategory.Chef, "Phanit Chhim", 25, Gender.MALE, 972678, 850);
let chashier1 = new Staff(StaffCategory.Chashier, "Sophal Saran", 24, Gender.FEMALE, 97678, 450);
let cleaner1 = new Staff(StaffCategory.Cleaner, "Heng Heak", 24, Gender.MALE, 97678, 250);
let securityMeasures1 = new Staff(StaffCategory.SecurityMeasures, "Soklim Hin", 24, Gender.MALE, 97678, 250);
let manager = new Manager("Meng", 19, Gender.FEMALE, 9999999999);
chef1.setSalary(2300);
mengSopheapRestaurant.humans.setManager(manager);
mengSopheapRestaurant.humans.addStaff(waiter1, waiter2, chef1, chef2, chef3, chef4, chashier1, securityMeasures1, cleaner1);
// console.log(chef1.getSalary());


/**
 *  The list of foods in the Restaurant
 */
let foods = new StockFood();
let food1 = new Food("Pork Bread", 15,FoodCategory.Fried);
let food2 = new Food("Beef Bread", 16.5,FoodCategory.Fried);
let food3 = new Food("Egg Bread", 12.5,FoodCategory.Fried);
let food4 = new Food("Fried Pork", 17.5,FoodCategory.Fried);
let food5 = new Food("Sea Food", 26.5,FoodCategory.Boil);
let food6 = new Food("Fried Fish", 18.5,FoodCategory.Fried);
let food7 = new Food("Beef Soup", 47.5,FoodCategory.Soup);
let food8 = new Food("Vegetale Soup", 22.5,FoodCategory.Soup);
let food9 = new Food("Hot dog", 17.5,FoodCategory.Fried);
let food10 = new Food("Sheep Soup", 60,FoodCategory.Soup);
let food11 = new Food("Snail Soup", 36.5,FoodCategory.Soup);
let food12 = new Food("Fried Snail", 28.45,FoodCategory.Fried);
let food13 = new Food("Fried Beef", 32.5,FoodCategory.Fried);
let food14 = new Food("Mix Pork and Beef Soup", 50.5,FoodCategory.Mix);
let food15 = new Food("Fried Sea Food", 43.5,FoodCategory.Fried);
let food16 = new Food("Fried Goat", 41.5,FoodCategory.Fried);
let food17 = new Food("Cool Soup", 69.69,FoodCategory.Mix);
let food18 = new Food("Fried and Soup Mix", 75.75,FoodCategory.Mix);
let food19 = new Food("Small Party Soup", 88.88,FoodCategory.Mix);
let food20 = new Food("Evening Grown Food", 150,FoodCategory.Mix);
foods.addFood(food1, food2, food3, food4, food5, food6, food7, food8, food9, food10, food11, food12, food13, food14, food15, food16, food17, food18, food19, food20);
mengSopheapRestaurant.foods.addFood(food1, food2, food3, food4, food5, food6, food7, food8, food9, food10, food11, food12, food13, food14, food15, food16, food17, food18, food19, food20);
// console.log(foods.numberCategory(food5));

/**
 *  All of Customers 
 */

 let customer1 = new Customer(1, "Kea Nhor", 21, Gender.MALE, 500);
 let customer2 = new Customer(1, "Sreykea Rouen", 21, Gender.FEMALE, 50);
 let customer3 = new Customer(1, "Samnak Kalan", 21, Gender.MALE, 45);
 let customer4 = new Customer(1, "Koev Song", 21, Gender.FEMALE, 29);
 console.log(customer1.orderAndPaymentFood([food1,food2,food3,food20]));
 console.log(customer1);
 mengSopheapRestaurant.humans.adddCustomer(customer1, customer2, customer3, customer4);
 


/**
 *  All of Tables in the Restaurant
 */
let table1 = new Table();
let table2 = new Table();
let table3 = new Table();
let chair1 = new Chair(1);
let chair2 = new Chair(2);
let chair3 = new Chair(3);
let chair4 = new Chair(4);
let chair5 = new Chair(5);
let chair6 = new Chair(6);
let chair7 = new Chair(7);
let chair8 = new Chair(8);
chair1.setCustomer(customer1);
chair2.setCustomer(customer2);
chair3.setCustomer(customer3);
chair4.setCustomer(customer4);
table1.addChair(chair1, chair2, chair3, chair4);
table2.addChair(chair5, chair6);
table3.addChair(chair7, chair8);
mengSopheapRestaurant.rooms.addTable(table1, table2, table3);

// console.log(customer1.rateCustomer(10));
// console.log(customer1.buyFood(food1));
// console.log(waiter2.getSalary())
// console.log(chef1.getPosition());
// console.log(chashier1);
// console.log(manager);
// console.log(foods);
// console.log(chair1);
// console.log(table1);
// console.log(customer1.eatFood(food2,chair1));
// console.log(mengSopheapRestaurant.humans.getNumberOfCustomers());
// console.log(mengSopheapRestaurant);