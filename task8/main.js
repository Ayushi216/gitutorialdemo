var Form=document.getElementById('addForm');
var itemList=document.getElementById('items');

//Form Submit Event
Form.addEventListener('submit',addItem);

//Delete button event
itemList.addEventListener('click',removeItem);

//Add item
function addItem(e){
    e.preventDefault();
    
    //Get input value
    var newItem=document.getElementById('item').value;

    //Create new li element

    var li=document.createElement('li');

    //Add Class
    li.className='list-group-item';

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create delete button element
    var deleteBtn =document.createElement('button');
    var editBtn=document.createElement('button');

    //Add classes to del button
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    editBtn.className='editbtn'
    //Append text node

    deleteBtn.appendChild(document.createTextNode('X'));
    editBtn.appendChild(document.createTextNode('Edit'));
    //Append in li
    li.appendChild(deleteBtn)
    li.appendChild(editBtn)

    //Append li in list
    itemList.appendChild(li);
    itemList.appendChild(li)
}

//Remove item function

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure you want to delete?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    
    }
}