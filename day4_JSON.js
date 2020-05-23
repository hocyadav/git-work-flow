const person = [
    {
        fname: 'hariom',
        lname: 'yadav',
        pets: ['dog', 'cat'],

        address:{
            country : 'india',
            state : 'Karnataka'
        }
    },
    {
        fname: 'Chandan',
        lname: 'YADAV',

        pets: ['dog2', 'cat2'],

        address:{
            country : 'india',
            state : 'Chennai'
        }
    }
];


const jsonString = JSON.stringify(person);
console.log(jsonString);//receive from server - json in string

//parse above json string
const inJson = JSON.parse(jsonString);
console.log(inJson);



