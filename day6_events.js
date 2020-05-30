//Events 

//add event listener to a button obj

const btnObj = document.getElementById('myButton');
//click event
btnObj.addEventListener('click', function(e) {
    console.log(e);
});

//mouse over event 
btnObj.addEventListener('mouseover', (e) => {
    btnObj.style.background = 'green';
});

//mouse out event
btnObj.addEventListener('mouseout', (e) => {
    btnObj.style.background = 'red';
});
