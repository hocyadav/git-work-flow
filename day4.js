//array of objects 
const person = [
    {
        fname: 'hariom',
        lname: 'yadav',

        address:{
            country : 'india',
            state : 'Karnataka'
        }
    },

    {
        fname: 'chandan',
        lname: 'YADAV'
    }
];
//1. print value
//console.log(person);
console.log(person[0]);

const {fname, lname} = person[0];//extract value from json
console.log(fname);
console.log(fname, lname);//print multiple value

const { address:{country} } = person[0];
console.log(country);


//2. add new value
person[0].city = 'bangalore';
console.log(person);

//3. delete value
delete person[0].lname;
console.log(person);




