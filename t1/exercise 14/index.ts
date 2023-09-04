/*Guest List: If you could invite anyone, living or deceased, to dinner, 
who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
Then use your list to print a message to each person, inviting them to dinner.*/
export { guest_1, guest_2, guest_3, guest_list, guest_msg };
let guest_1: string = "Ali";
let guest_2: string = "Bilal";
let guest_3: string = "Ahmed";
let guest_list: string[]=[guest_1,guest_2,guest_3];
let guest_msg: string = "Hello my friend guest, I would like to invite you in todays dinner"
for (let guest of guest_list) {
   let personalized_msg_to_guest: string = guest_msg.replace("guest",guest);
   console.log(personalized_msg_to_guest)
}