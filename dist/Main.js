"use strict";
exports.__esModule = true;
var Food_1 = require("./Food/foods/Food");
var StockFood_1 = require("./Food/foods/StockFood");
var Customer_1 = require("./Human/Customer/Customer");
var Person_1 = require("./Human/Person");
var Staff_1 = require("./Human/Staff/Staff");
var Restuarant_1 = require("./Restuarant");
var Chair_1 = require("./Table/Chair");
var Table_1 = require("./Table/Table");
var Manager_1 = require("./Human/Manager/Manager");
/**
 *  Restaurant of Meng and Sopheap
 */
var mengSopheapRestaurant = new Restuarant_1.Restuarant("MengPheap", "Phnom Penh", "8AM", "9PM");
/**
 *  All of Boss, Manager and staffes
 */
var waiter1 = new Staff_1.Staff(Staff_1.StaffCategory.Waiter, "Chaiya Phai", 20, Person_1.Gender.MALE, 99989, 340);
var waiter2 = new Staff_1.Staff(Staff_1.StaffCategory.Waiter, "Samoul Vann", 24, Person_1.Gender.MALE, 97678, 350);
var chef1 = new Staff_1.Staff(Staff_1.StaffCategory.Chef, "Sophy Soeuy", 24, Person_1.Gender.FEMALE, 976678, 850);
var chef2 = new Staff_1.Staff(Staff_1.StaffCategory.Chef, "Koev Song", 24, Person_1.Gender.FEMALE, 947678, 850);
var chef3 = new Staff_1.Staff(Staff_1.StaffCategory.Chef, "Oun Bav", 25, Person_1.Gender.MALE, 976578, 850);
var chef4 = new Staff_1.Staff(Staff_1.StaffCategory.Chef, "Phanit Chhim", 25, Person_1.Gender.MALE, 972678, 850);
var chashier1 = new Staff_1.Staff(Staff_1.StaffCategory.Chashier, "Sophal Saran", 24, Person_1.Gender.FEMALE, 97678, 450);
var cleaner1 = new Staff_1.Staff(Staff_1.StaffCategory.Cleaner, "Heng Heak", 24, Person_1.Gender.MALE, 97678, 250);
var securityMeasures1 = new Staff_1.Staff(Staff_1.StaffCategory.SecurityMeasures, "Soklim Hin", 24, Person_1.Gender.MALE, 97678, 250);
var manager = new Manager_1.Manager("Meng", 19, Person_1.Gender.FEMALE, 9999999999);
chef1.setSalary(2300);
mengSopheapRestaurant.humans.setManager(manager);
mengSopheapRestaurant.humans.addStaff(waiter1, waiter2, chef1, chef2, chef3, chef4, chashier1, securityMeasures1, cleaner1);
// console.log(chef1.getSalary());
/**
 *  The list of foods in the Restaurant
 */
var foods = new StockFood_1.StockFood();
var food1 = new Food_1.Food("Pork Bread", 15, Food_1.FoodCategory.Fried);
var food2 = new Food_1.Food("Beef Bread", 16.5, Food_1.FoodCategory.Fried);
var food3 = new Food_1.Food("Egg Bread", 12.5, Food_1.FoodCategory.Fried);
var food4 = new Food_1.Food("Fried Pork", 17.5, Food_1.FoodCategory.Fried);
var food5 = new Food_1.Food("Sea Food", 26.5, Food_1.FoodCategory.Boil);
var food6 = new Food_1.Food("Fried Fish", 18.5, Food_1.FoodCategory.Fried);
var food7 = new Food_1.Food("Beef Soup", 47.5, Food_1.FoodCategory.Soup);
var food8 = new Food_1.Food("Vegetale Soup", 22.5, Food_1.FoodCategory.Soup);
var food9 = new Food_1.Food("Hot dog", 17.5, Food_1.FoodCategory.Fried);
var food10 = new Food_1.Food("Sheep Soup", 60, Food_1.FoodCategory.Soup);
var food11 = new Food_1.Food("Snail Soup", 36.5, Food_1.FoodCategory.Soup);
var food12 = new Food_1.Food("Fried Snail", 28.45, Food_1.FoodCategory.Fried);
var food13 = new Food_1.Food("Fried Beef", 32.5, Food_1.FoodCategory.Fried);
var food14 = new Food_1.Food("Mix Pork and Beef Soup", 50.5, Food_1.FoodCategory.Mix);
var food15 = new Food_1.Food("Fried Sea Food", 43.5, Food_1.FoodCategory.Fried);
var food16 = new Food_1.Food("Fried Goat", 41.5, Food_1.FoodCategory.Fried);
var food17 = new Food_1.Food("Cool Soup", 69.69, Food_1.FoodCategory.Mix);
var food18 = new Food_1.Food("Fried and Soup Mix", 75.75, Food_1.FoodCategory.Mix);
var food19 = new Food_1.Food("Small Party Soup", 88.88, Food_1.FoodCategory.Mix);
var food20 = new Food_1.Food("Evening Grown Food", 150, Food_1.FoodCategory.Mix);
foods.addFood(food1, food2, food3, food4, food5, food6, food7, food8, food9, food10, food11, food12, food13, food14, food15, food16, food17, food18, food19, food20);
mengSopheapRestaurant.foods.addFood(food1, food2, food3, food4, food5, food6, food7, food8, food9, food10, food11, food12, food13, food14, food15, food16, food17, food18, food19, food20);
// console.log(foods.numberCategory(food5));
/**
 *  All of Customers
 */
var customer1 = new Customer_1.Customer(1, "Kea Nhor", 21, Person_1.Gender.MALE, 500);
var customer2 = new Customer_1.Customer(1, "Sreykea Rouen", 21, Person_1.Gender.FEMALE, 50);
var customer3 = new Customer_1.Customer(1, "Samnak Kalan", 21, Person_1.Gender.MALE, 45);
var customer4 = new Customer_1.Customer(1, "Koev Song", 21, Person_1.Gender.FEMALE, 29);
console.log(customer1.orderAndPaymentFood([food1, food2, food3, food20]));
console.log(customer1);
mengSopheapRestaurant.humans.adddCustomer(customer1, customer2, customer3, customer4);
/**
 *  All of Tables in the Restaurant
 */
var table1 = new Table_1.Table();
var table2 = new Table_1.Table();
var table3 = new Table_1.Table();
var chair1 = new Chair_1.Chair(1);
var chair2 = new Chair_1.Chair(2);
var chair3 = new Chair_1.Chair(3);
var chair4 = new Chair_1.Chair(4);
var chair5 = new Chair_1.Chair(5);
var chair6 = new Chair_1.Chair(6);
var chair7 = new Chair_1.Chair(7);
var chair8 = new Chair_1.Chair(8);
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
