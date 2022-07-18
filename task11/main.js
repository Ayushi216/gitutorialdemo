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

    //localStorage.setItem('Name',nameInput.value);
    //localStorage.setItem('Email',emailInput.value);

    let myObj={
      name: nameInput.value,
      email: emailInput.value
    };

    //string representation

    let myObj_serialized= JSON.stringify(myObj)
    localStorage.setItem("myObj", myObj_serialized);
  

    //parse it

    let myObj_deserialized=JSON.parse(localStorage.getItem(myObj));
    console.log(localStorage)
   
    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}