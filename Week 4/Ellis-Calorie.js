import FoodModel from "./food-model";

class CalorieConverter {
        let = new FoodModel ("1007", "Egg", "78");
        let = new FoodModel ("1008", "Apple", "95");
        let = new FoodModel ("1009", "Hamburger", "354");
        let = new FoodModel ("1010", "Fries", "400");
        let = new FoodModel ("1011", "Banana", "105");
        let = new FoodModel ("1012", "Soda", "150");
}

class FoodModel {
    constructor (id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
    static data(){
    }
}

FoodModel.find();