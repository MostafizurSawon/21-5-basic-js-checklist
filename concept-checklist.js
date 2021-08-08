// 1. write 3 variables (number, string, boolean)
var numberOne = 23;
var yourName = "Mostafizur Rahman";
var goingHome = true;


// 2. 2 variables using (let, const)
let havePen = 3;
const yourBirthYear = 1995;
havePen = 4;
console.log(havePen);
console.log(yourBirthYear);


// 3. Simple Math Operations() +, -, *, /, %)
let a = 4;
let b = 2;
let c = 5;
let add = a + b;
let minus = a - b;
let multiplication = a * b;
let divide = a/b;
let moduluuuuu = c % b;
console.log(add, minus, multiplication, divide, moduluuuuu);


// 4. comparison ()
if ( a > b ) {
    console.log("a is bigger than b");
}
else if( a < b ) {
    console.log("a is smaller than b");
}
else if( a == b ) {
    console.log("a and b is the same.");
}
else if( a != b ) {
    console.log("a and b are not the same.");
}
else if( a >= b ) {
    console.log("a is either equal to b or greater than b.");
}
else if( a <= b ) {
    console.log("a is either equal to b or smaller than b");
}
else{
    console.log("hulululluululuulullu");
}



// 5. two conditions. case-1: fulfill both conditions. case-2: fulfill at least one condition
if(a > b && b < c) {
    console.log("a is greater than b and b is lesser than c.");
}
else if(a < b || c > b) {
    console.log("Either a is lesser thanb or c is greater than b.");
}


// 6. if-else
let totalMango = 6;
if( totalMango > 6){
    console.log("Yee i am a rich kid.");
}
else{
    console.log("Mango is not good.");
}


//7. while loop to display 7 to 19 all numbers. only display odd numbers including 7 to 19
let number = 7;
while (number >= 7 && number <= 19) {
    console.log(number);
    number++;
}

let numberOdd = 7;
while (numberOdd >= 7 && numberOdd <= 19) {
    console.log(numberOdd);
    numberOdd+=2;
}

// 8. declare an array. number of elements. update or change 4th position element. add or remove elements. check whether a specific value exists in the array
let id = [2,3,4,5,6,7,8]
id[3] = 17
console.log(id);
id.push(50);
console.log(id);
id.pop();
console.log(id);
// for (let i = 0; i < id.length; i++) {
//     console.log(id[i]);
//     if(id[i] == 7){
//         return true;
//     }
//     else{
//         return false;
//     }
//     console.log(id);
// }

// 9. use any for loop to display every elements of an array

// for (let i = 0; i < 10; i++){
//     console.log(i);
// }
let displayNumber = [3,2,6,3,2,6,8,4];
for (let i = 0; i < displayNumber.length; i++) {
    const element = displayNumber[i];
    console.log(element);
    
}
console.log("finished number 9");

// 10. you have an array of numbers. display only the numbers bigger than 80
let biggerNumber = [34,53,423,65,89,76,90]
for (let i = 0; i < biggerNumber.length; i++) {
    let num = biggerNumber[i];
    if (num > 80){
    console.log(num);
    }
}

console.log("Finished number 10.");

// 11. write a function that takes three numbers and returns the multiplication of the three numbers

function multiplicationNum (num1, num2, num3) {
    totalMultipication = num1 * num2 * num3;
    return totalMultipication;
}
let numOne = 2;
let numTwo = 3;
let numThree = 4;
let result = multiplicationNum(numOne, numTwo, numThree);
console.log(result);
console.log("Number 11 finished.");

// 12. declare an object and change any property of that object.
let mobile = {
    model : "Google Pixel 3XL",
    price : 64000,
    year : 2018
};
console.log(mobile);
mobile.model = "Google Pixel 4XL";
mobile.price = 70000;
mobile.year = 2019;
console.log(mobile);
