"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
const exercise_14_1 = require("../exercise 14");
const exercise_15_1 = require("../exercise 15");
Object.defineProperty(exports, "guest_list", { enumerable: true, get: function () { return exercise_15_1.guest_list; } });
let table_msg = "I have a Good News! We've just found a bigger dinner table.";
let newGuest_1 = 'Abdullah';
let newGuest_2 = 'Majeed';
let newGuest_3 = 'Rizwan';
console.log(table_msg);
let middlepoint = Math.floor(exercise_15_1.guest_list.length / 2);
exercise_15_1.guest_list.unshift(newGuest_1);
exercise_15_1.guest_list.splice(middlepoint, 0, newGuest_2);
exercise_15_1.guest_list.push(newGuest_3);
for (let guest of exercise_15_1.guest_list) {
    let personalized_msg_to_guest = exercise_14_1.guest_msg.replace("guest", guest);
    console.log(personalized_msg_to_guest);
}
