//Examine the document object
//console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title= 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.all[10].textContent='Hello');
console.log(document.forms);
console.log(document.links);
console.log(document.images);

//GETELEMENTBYID

var headerTitle=(document.getElementById('header-title'));
var header=(document.getElementById('main-header'));
var items=(document.getElementsByClassName('title'));
console.log=(headerTitle);
headerTitle.textContent='Hello';
headerTitle.innerText='Goodbye';
headerTitle.innerHTML='<h3>Hello</h3>'

header.style.borderBottom='solid 3px black';
items[0].style.fontWeight ='bold';
items[0].style.color='green'

