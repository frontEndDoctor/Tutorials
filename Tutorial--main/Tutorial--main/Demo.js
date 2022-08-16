/ This is a script for tutorial/demo purposes on JS 
// To run code independently, uncomment the block and run

//Topic 1: Difference between var,let,const
// Data types(Number(float, int), String, Boolean,Null, Undefined, Object)
// Checking the data type(typeof)
// concatenation
// Checking the data type after concatenating
// Datatype conversion(implicit,explicit)

// Examples for Day 1:
var x = "hello";
var y = "world";
var z = x + " " +y;
console.log(z);


var a = '13';
var b = '17';
var c = true;
var u = a+b+c;
console.log(typeof u);

// More examples on data types
var doctor = 'Ben';
var age =String(45);
var height = Number("m" + 30.16);

// Example of Object
var doctor = {
n :'Ben',
age: 45,
height:"m" + 30.16
}
console.log(typeof doctor);
console.log(age);
console.log(typeof height);





// Topic 2: Variable Scope and keywords
// var keyword allows updating and re-declaring both globally and locally
// const keyword does no allow redeclaring or updating
// let keyword allows redeclaring and updating without using  "let" 


var x = "Chisom";
function A(){
    console.log(x);
var x = "Zoba";
};

// // var x = "Zoba";
// // A();
// // let x = "Chisom";
// // function A(){
// //     console.log(x);
// //     //  var x = "Zoba";

// // };
// // let x = "Zoba";
// // A();
// // const x = "Chisom";
// // function A(){
// //     console.log(x);
// //     //  var x = "Zoba";

// // };
// // x = "Zoba";
// // A();


// // let exp = 5.15 + "years";
// // console.log(exp);


// // age = Number('5');
// // console.log(age);
// // height = parseInt(15.25);
// // console.log(height);


//program to convert date to number
// create date
const d1 = new Date();
console.log(d1);

//converting to number
const re = d1.getTime();
console.log(re);




// Topic 3: JS Operators (Assignment, Arithmetic,Comparison,Logical)
x=15;
x++;
x+=15;
console.log(x);

// // x--;
// // x-=15;
// // x = 20;
// // y = 5;
// // z = (x*y) / (x+y) - y;
// // console.log(z);
// // if (!x>=y)

// // {
// //     console.log(true);
// // }
// //    else{
// //     console.log(false);
// // }

//Topic 4: Conditionals 
// // Test for numbers
var test = prompt("select a number:")
if (test % 2 == 0){

         console.log("it is even");
    
 }
 else if (test % 2 == null)
 {

 console.log("it is odd");

 }
else {

    console.log("it is odd");
}

// to check for even numbers 
let number = prompt("Enter a random mumber:");
if (number %2 == 0){
    console.log(" It is an even number");    
}
else{
    console.log(" It is an odd number");
};


// Topic 5: Tenary operators

// const x= 50;
// const y = 100;
// let z = (x>y)? "yes": "no";
//console.log(z);

 // const pw = "abcde"
// // let user = prompt("Enter your password:")
// // let signIn = (user === "abcde")? "Welcome": "Incorrect Password"
// // console.log(signIn);



// Topic 5:  Loops
// // For loops(for, for..in,for..of)
// // while loop (while, do/while)
// // infinite loop and break



// //Example 1: using for loop to print even numbers from 0-10
// var a = 10;
// for ( i = 0; i<10; i+=2) {
//     console.log(i);
    
// }


// // Example 2: using for loop to print tens
// var p = 100;
// for (i=0;i<=100; i+=10){
//     console.log(i);
// }


// //Example 3: using for loop to print the sum of the first 5 natural numbers
// var b = 5;
// let sum = 0;
// for (i=0;i<=b; i++){
//     sum+=i;
// }
// console.log(sum);


// //Example 5: using for loop to print out prime numbers  from 0-10
// let num = 10;
// for(i=1;i<num; i+=2){
//     if (i!=1) {
//         console.log(i);
//     }
   
// 

// // for..in is used to loop through lists,arrays or object
// //Example 1:To print the adults in a class using a list of their ages
// // const age = [5,10,15, 18, 20,25,50];

// // for (let x in age) {
// //     if (age>=18) {
        
// //         console.log(age[x],"They are adults")
// //     }

// // const trainees= ["Ben", "Tochi","Emma", "Obed", "Excel"];
// // for (x in trainees){
// // console.log(trainees[x]);
// // }     


//infinite for loop(In this case, the break keyword is used to end the loop and avoid memory crash)

// // var c = 15;
// // while (c<=15) {
// //     // break
// //     console.log("It is just a number");
   
// // }

//  do..while loop
// age = 0;
// do {
//    console.log(age++); 
// } while (age<18);


// Topic 6: Arrays and its  methods
let cars = [ "BMW"," Volkswagen", "Toyota","Honda","IVM"];
// console.log(cars);
// let len = cars.pop();
// const arr = [15,"Volkswagen", true, 15.25];
// console.log(arr);
// console.log(len);
// console.log(cars.pop("IVM"));
// console.log(cars);
let ben = cars.unshift('Benz');
console.log(cars);
let o = cars.push('Lexus');
console.log(cars);
console.log(cars[0]);
// let e = cars.splice(2,1,'Volkswagen',"Hyundai");

console.log(cars);
cars[2] = "Hyundai";
console.log(cars);
let arr =[[15,"Volkswagen", true, 15.25],[ "BMW"," Volkswagen", "Toyota","Honda","IVM"]]
console.log(arr[0][3]);
// Using arrays and conditionals
var num = [1,2,3,4,5];
if (num%2!=0 || num/1) {
    console.log("2 is the third element")
}


// Topic 7: function
function greet() {
    console.log("Hello World!");
}
greet();

function add(a,b) {
    console.log(a+b)
    
}
add(2,4);

function hello (user) {
    alert("you are welcome" +" " + user);
 }
let user = prompt(" Your are:")
hello(user);

// function that calculates the area of a circle
// Option A 
function circle(radius) {
     this.radius = radius;
     this.area = function()
     {
         return Math.PI * this.radius * this.radius;
     };
 }
 var c = new circle (3)
console.log('area =', c.area().toFixed(2) );

// Option B
// function circle( radius) {

//     return  3.142 * radius ** 2
// }
// let radius = 3;
// let result = circle(radius);

// console.log( "The area is"+ " " + result);

// function that calculates the area of a square
function area(s) {
    return s**2;
 }

let s = parseFloat(prompt("Enter a number for the width"));
let t = parseFloat(prompt("Enter a number for the second width"));
let ans = area(s);
console.log( " The answer is"+ ans);

// Arrow function
// Arrow function is more like a shorthand form of functions
let welcome = () => console.log("Hello World!")
welcome();

// arrow functions have limited usage
const lang = [ "Python", "C++", "JS", "C#", "Go"]
console.log (lang.map(lang => lang.length));

// JS Objects
// Definition
//Creation
// // using an object literal.
// // using the keyword new Object()
// // using constructor
// // using Object.create().

// Accesssing Objects
// // Using Dot notation
// // Using key name

// methods
// Definition
// Creating your own methods
// Some common methods in JS


// Assignment: write out the differences(>=5)
//between objects and arrays
//To be submitted by 8:55am tomorrow morning
//copied texts will be rejected