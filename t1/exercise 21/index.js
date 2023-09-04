"use strict";
;
let person_1 = { name: "Ali", age: 25, ISteen: true, ISstudent: false };
let person_2 = { name: "Hassan", age: 17, ISteen: false, ISstudent: true };
if (person_1.age >= 18) {
    person_1.ISteen = true;
}
;
if (person_2.age >= 18) {
    person_2.ISteen = true;
}
;
console.log(person_1);
console.log(person_2);
