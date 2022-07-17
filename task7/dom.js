//Traversing the DOM//

var itemList=document.querySelector('#items');

//parentnode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode)

//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement)

//childNodes includes space
console.log(itemList.childNodes );

//children
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow'

//firstChild includes whitespace
console.log(itemList.firstChild);

//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello 1'

//lastChild includes whitespace
console.log(itemList.lastChild);

//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello 4'

//nextSibling
console.log(itemList.nextSibling);

//nextElementSibling, null now because has no next element sibbling here
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);

//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green'

//createElement
//creating a div
var newDiv=document.createElement('div')

//add class
newDiv.className='Hello';

//add id
newDiv.id='hello1'

//add attritube
newDiv.setAttribute('title','Hello Div');

//create a text node
var newDivText= document.createTextNode('Hello World');

//Add Text to div
newDiv.appendChild(newDivText)

var container=document.querySelector('header .container');
var h1= document.querySelector('header h1');
//console.log(newDiv);
newDiv.style.fontSize='30px';
container.insertBefore(newDiv,h1)

var container1=document.querySelector('#main');
var h2= document.querySelector('#items');
newDiv.style.fontSize='30px';
container1.insertBefore(newDiv,h2)





