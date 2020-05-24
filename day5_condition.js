//Conditionals

let age = 30;

if (age == 30) {//does not check data type
    console.log(true);
}

if (age == '30') {//does not check data type :1st convert 30 string to int and then check
    console.log(true);
}

if (age === 30) { //check data type
    console.log(true);
} else {
    console.log(false);
}
if (age === '30') {//check data type : so int == string -> false
    console.log(true);
} else {
    console.log(false);
}

if (age !== 3) { //check data type
    console.log(true);
} else {
    console.log(false);
}
//TODO : how to convert string to int : below 2 are same output i want different
if (age <= '31') { //check data type
    console.log(true);
} else {
    console.log(false);
}

if (age <= 31) { //check data type
    console.log(true);
} else {
    console.log(false);
}


let a = 10;
let b = 20;

function evaluate() {
    if(a < b) {
        return true;
    } else {
        return false;
    }
}

console.log(evaluate());

//same function as above
function evaluate1() {
    return a < b;
}
console.log(evaluate1());


let animal = 'cat';
const likesCats = animal == 'cat' ? true : false;//first execute animal == 'cat'
console.log(likesCats);

//switch..

animal = 'bird';
switch (animal) {
    case 'cat':
        console.log('cat');
        break;
    case 'dog':
        console.log('dog');
        break;
    default:
        console.log('neither')
        break;
}

animal = 'dog';
switch (animal) {
    case 'cat':
    case 'dog'://cat || dog
        console.log('cat or dog');
        break;
    default:
        console.log('neither')
        break;
}



