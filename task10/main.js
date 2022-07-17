/*const btn = document.querySelector('.btn');
btn.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
});

 btn.addEventListener('mouseover', e => {
    e.preventDefault();
    document.getElementById('my-form').style.background = 'pink';
    document.querySelector('body').classList.add('bg-dark');
    
  });
  btn.addEventListener('mouseout', e => {
    e.preventDefault();
    document.getElementById('my-form').style.background = 'grey';
    document.querySelector('body').style.background='white';
  });*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    //adding to local storage

    localStorage.setItem(nameInput.value,emailInput.value);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}