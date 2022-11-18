// // 1 //
let person = {
    fname:"John", 
    lname:"Jonson", 
    age:25,
};

let person_1 = "";
for (let x in person) {
  person_1 += person[x];
  console.log (person_1);
}



//2

let animals = ["dog", "lion", "cat"];

let text = "";
for (let x of animals) {
  text += x;
  console.log (text)
}

// 3

let array = [28, 45, 69, 20, 15, 7, 98]; 
let min = array[0], max = array[0]; 
for (let i = 1; i < array.length; i++) { 
   if (array[i] > max) 
      max = array[i]; 
   if (array[i] < min) 
    min = array[i]; 
 } 

 
// 4

var nums = [1, 2, 3, 8, 15]
Math.min.apply(Math, nums)    
Math.max.apply(Math, nums)    

// 9

const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }

const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]
const uniqueAges = ages.filter(unique)

console.log(uniqueAges)

// 8

const seconds = 239701
 
var date = new Date(null);
date.setSeconds(seconds);
var hhmmssFormat = date.toISOString().substr(11, 8);
console.log(hhmmssFormat);

// 7
const length = ["100", "80", "70", "60"];
length.reverse();
console.log(length);

// 6
const names = ["George", "Salome", "Lasha", "Sofia"];

names.splice( 0,1, "David");
console.log(names);

// 5
