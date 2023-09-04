"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_msg = exports.guest_list = exports.guest_3 = exports.guest_2 = exports.guest_1 = void 0;
let guest_1 = "Ali";
exports.guest_1 = guest_1;
let guest_2 = "Bilal";
exports.guest_2 = guest_2;
let guest_3 = "Ahmed";
exports.guest_3 = guest_3;
let guest_list = [guest_1, guest_2, guest_3];
exports.guest_list = guest_list;
let guest_msg = "Hello my friend guest, I would like to invite you in todays dinner";
exports.guest_msg = guest_msg;
for (let guest of guest_list) {
    let personalized_msg_to_guest = guest_msg.replace("guest", guest);
    console.log(personalized_msg_to_guest);
}
