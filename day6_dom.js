//DOM : document object model

//single element selector
//M1. getEle by id
const list = document.getElementById('list');
//console.log(list);

//M2. query selector ==> select 1st element that match
//: select item by tab, id(#) , class(.)
const list2 = document.querySelector('ul');//select 1st ul, only 1 ul present in document
//console.log(list2);

const list3 = document.querySelector('#list');//#id
//console.log(list3);

const listItem = document.querySelector('.list-item');//.class
//console.log(listItem);

//querySelectorAll ==> multiple element selector
const listItems = document.querySelectorAll('.list-item');//.class

listItems.forEach(it => {
    console.log(it);
});

listItems.forEach(it => {
    console.log(it.textContent);
});
