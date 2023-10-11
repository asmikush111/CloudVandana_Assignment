
const reverseSentence = str => {

   const arr = str.split(" ");
   const reversed = arr.map( x => {
      return x.split('').reverse().join("");
   });
   return reversed.join(" ");

};

console.log(reverseSentence('Hello World how is it outside'));