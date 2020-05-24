function hello() {
    console.log("hi..");
}

function hello2(firstName, lastName) {
    //console.log(firstName, lastName);
    console.log(`Hello ${firstName} ${lastName}`);//modern way
}

// function convertToPercent(num) {
//     return num/100;
// }
//ES6 concept- convert above into arrow function
//1. remove function keyword
//2. add = && =>

convertToPercent = (num) => {
    return num/100;
}
convertToPercent2 = (num) => num/100;
convertToPercent3 = num => num/100;

hello();

hello2('hriom');//2nd argument is undefined
hello2('hriom', 'yadav');


console.log(convertToPercent(50));
console.log(convertToPercent('hari'));//passing wrong data type

console.log(convertToPercent2(59));
console.log(convertToPercent3(78));





