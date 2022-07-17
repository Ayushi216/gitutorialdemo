var Form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter')

//Form Submit Event
Form.addEventListener('submit',addItem);

//Delete button event
itemList.addEventListener('click',removeItem);

//FilterEvent
filter.addEventListener('keyup',filterItems);

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

    //Add classes to del button
    deleteBtn.className='btn btn-danger btn-sm float-right delete';

    //Append text node

    deleteBtn.appendChild(document.createTextNode('X'));

    //Append in li
    li.appendChild(deleteBtn)

    //Append li in list
    itemList.appendChild(li);
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

//Filter items

function filterItems(e){
    //convert to lower text
    var text=e.target.value.toLowerCase();
    //Get li's
    var items=itemList.getElementsByTagName('li');
    //Convert to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display='block'
        } else {
            item.style.display='none'
        }
    });
}