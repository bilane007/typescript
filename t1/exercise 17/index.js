"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
const exercise_16_1 = require("../exercise 16");
let msg__1 = `I can invite only two guests.`;
console.log(msg__1);
let appology_msg = `Sorry guest, I can’t invite you to the dinner.`;
while (exercise_16_1.guest_list.length > 2) {
    let removedGuest = exercise_16_1.guest_list.pop();
    if (typeof removedGuest === `string`) {
        let personalized_msg_to_guest_1 = appology_msg.replace("guest", removedGuest);
        console.log(personalized_msg_to_guest_1);
    }
}
let still_inv_msg = `guest you are still invited to the dinner.`;
for (let guest of exercise_16_1.guest_list) {
    console.log(still_inv_msg.replace("guest", guest));
}
while (exercise_16_1.guest_list.length > 0) {
    let last_Guest_removed = exercise_16_1.guest_list.pop();
}
console.log(exercise_16_1.guest_list);
