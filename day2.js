//string - string concat, int, null, undefined .. literal

let name = 'hariom'; // String literal
let age  = 30;  //Number literal
let loverDog = false; //Boolean literal
let color = null; //Null
let list = undefined; //Undefined
let list2; // Undefined


console.log(list);
console.log(list2);
console.log(color);

//name += ' Yadav'; //string concat
name = `${name} is ${age}`;//string concat modern way
console.log(name);

//------------Array------------
//M1
const arry = new Array(10,11,23,121,999);//constant variable
console.log(arry);
arry[0] = 9;//mutating the array, we are not re assigning any thing on array coz it is constant, i.e. we cant reassign entire array 
console.log(arry);
console.log(arry[0]);
//arry = new Array(1,2,3);//error - coz array is constant

//M2
const newAry = [99,11,12,13,14];//modern way
console.log(newAry);


