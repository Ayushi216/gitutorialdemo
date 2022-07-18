const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

//Listen for refresh
myForm.addEventListener("DOMContentLoaded",ready);
function ready(){
  for(var i = 0;i<=localStorage.length;i++){
    const li = document.createElement('li');

   // li.appendChild(document.createTextNode(localStorage[i]));
    //console.log();


  }
}
document.addEventListener("DOMContentLoaded",ready);

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

    // Append to ul
    userList.appendChild(li);

    let myObj={
      name: nameInput.value,
      email: emailInput.value
    };

    //string representation

    let myObj_serialized= JSON.stringify(myObj)
    localStorage.setItem(emailInput.value, myObj_serialized);
   
  
   
    // Clear fields
    nameInput.value = '';
    emailInput.value = '';


  }

}
