"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/
const index_1 = require("../exercise 14/index");
Object.defineProperty(exports, "guest_list", { enumerable: true, get: function () { return index_1.guest_list; } });
let canceledGuest = index_1.guest_3;
console.log(`${canceledGuest} can't make it to the dinner.`);
let canceledGuestindex = index_1.guest_list.indexOf(canceledGuest);
if (canceledGuestindex !== -1) {
    index_1.guest_list.splice(canceledGuestindex, 1);
}
let newGuest = "Shahid";
index_1.guest_list.push(newGuest);
for (let guest of index_1.guest_list) {
    let personalized_msg_to_guest = index_1.guest_msg.replace("guest", guest);
    console.log(personalized_msg_to_guest);
}
