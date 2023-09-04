let Names: string[]=["Bilal","Shahid","Ahmed","Ali"];
console.log(Names[0])
console.log(Names[1])
console.log(Names[2])
console.log(Names[3])

let message_1: string = `Hello NAME Good Morning, I hope you're having a great day!`;

for (let Name of Names) {
   let personalizedMessage = message_1.replace("NAME", Name);
   console.log(personalizedMessage);
}