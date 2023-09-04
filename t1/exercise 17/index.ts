/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
import { guest_list } from "../exercise 16";
let msg__1: string = `I can invite only two guests.`;
console.log(msg__1)
let appology_msg: string = `Sorry guest, I can’t invite you to the dinner.`
while (guest_list.length > 2) {
   let removedGuest = guest_list.pop();
   if (typeof removedGuest === `string`) {
      let personalized_msg_to_guest_1: string = appology_msg.replace("guest", removedGuest);

   console.log(personalized_msg_to_guest_1)
}
}
let still_inv_msg = `guest you are still invited to the dinner.`
for (let guest of guest_list) {
console.log(still_inv_msg.replace("guest", guest))
}
while (guest_list.length > 0) {
   let last_Guest_removed = guest_list.pop();
}
console.log(guest_list)