"use strict";
let favorite_way_of_transportation = "car";
let car_brands = ['lamborghini', 'ferrari', 'bugatti', 'tesla', 'BMW'];
let msg_1 = `I would like to own a fav_brand car.`;
for (let car_brand of car_brands) {
    let msg_for_car = msg_1.replace("fav_brand", car_brand).replace("car", favorite_way_of_transportation);
    console.log(msg_for_car);
}
