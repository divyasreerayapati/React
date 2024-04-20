let arr = [1, 2, 3, 4, 5, 6, 7];

function repeatingthis() {
  const newArr = arr.reduce((a) => a % 2 == 0);
  console.log(newArr);
}
repeatingthis();

//filter,map,reduce

console.log(arr.map((arrs) => arrs % 2 == 0));

//Arrow fucntions

let greet = function () {
  console.log("Hello world");
  return 1;
};
console.log(greet());

let greet1 = (user) => {
  console.log("Hello " + user);
};
greet1("Divya");

let sum = (num1, num2) => {
  return num1 + num2;
};
console.log(sum(5, 6));

let sub = (num3, num4) => num4 - num3;

console.log(sub(4, 5));

let add = (num1, num2) => {
  if (num1 >= 0 && num2 >= 0) {
    return num1 + num2;
  } else {
    return "negative";
  }
};
console.log(add(-2, 3));

let a = 10;

//Template literals
let num1 = 10;
let num2 = 20;
console.log(`sum of ${num1} and ${num2} is
 ${num1 + num2}`);

//Object Literals
const obj1 = {};

obj1.code = 1001;
obj1.name = "software";
obj1.getdata = function () {
  console.log(obj1.code, obj1.name);
};
obj1.getdata();

//Spread Operator

function sumOne(a, b) {
  return a + b;
}
let arry = [1, 2];
console.log(sumOne(...arry));
