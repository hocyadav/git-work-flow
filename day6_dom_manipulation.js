//DOM manipulation : change element in doc obj model

const list = document.querySelector('#list');
console.log(list);

//list.firstElementChild.remove();//remove 1st element
//list.lastElementChild.remove();//remove last element

//m1 : add text
list.firstElementChild.textContent = 'New item added from js';

//m2 : add html
list.lastElementChild.innerHTML = '<h2> New item added </h2>';

//m3 : add style : manipulate css style
//adding new key value inside attribute
list.firstElementChild.style.background = 'green';
