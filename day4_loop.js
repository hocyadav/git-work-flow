//loop

let i = 0;
while(i < 10) {
    //console.log(i);
    i++;
}

for(let j = 0; j < 10; j++) {
    //console.log(j);
}

const person = [
    {
        fname: 'hariom',
        lname: 'yadav',
        pets: ['dog', 'cat'],
        age: 30,

        address:{
            country : 'india',
            state : 'Karnataka'
        }
    },
    {
        fname: 'Chandan',
        lname: 'YADAV',

        pets: ['dog2', 'cat2'],
        age: 25,

        address:{
            country : 'india',
            state : 'Chennai'
        }
    }
];
//m1 : traverse array of objects
for(let i = 0; i < person.length; i++) {
    //console.log(person[i].fname);
}
//m2
for(let p of person) {//in java we use ':' in place of 'of'
    //console.log(p.fname);
}

//m3 : using forEach
person.forEach(function(pVal){
    //console.log(pVal.fname);
});

//m3 : using arrow function : 1. remove fun keyword, 2. add = & =>
person.forEach((pVal) => {
    //console.log(pVal.fname);
});

// person.forEach(pVal =>
//     console.log(pVal.lname)
// );

//map function
const arrOfFirstName = person.map(person => person.fname);
//console.log(arrOfFirstName);

//filter method
const ageLessThan30 = person.filter(person => person.age < 30);
//console.log(ageLessThan30);

const ageLessThanEqual30 = person.filter(person => person.age <= 30);
console.log(ageLessThanEqual30);
