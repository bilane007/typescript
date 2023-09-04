/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/
import { guest_1, guest_2, guest_3, guest_list, guest_msg } from "../exercise 14/index";
let canceledGuest = guest_3;
 console.log(`${canceledGuest} can't make it to the dinner.`)
let canceledGuestindex = guest_list.indexOf(canceledGuest);
if (canceledGuestindex !== -1) {
    guest_list.splice(canceledGuestindex, 1);
}
let newGuest = "Shahid";
guest_list.push(newGuest);
for (let guest of guest_list) {
   let personalized_msg_to_guest: string = guest_msg.replace("guest",guest);
   console.log(personalized_msg_to_guest) 
}
export { guest_list };
