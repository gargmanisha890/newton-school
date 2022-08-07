let todos = [];

// TODO 3:  create a function to add todos in the list 
todos.map(todo => {

})

let counter = 0 ;

const todosContainer = document.getElementById('todo_Container');

document.getElementById('add_todo_action').addEventListener('click', function(e) {
    const title = document.getElementById('todo_text').value; 
    if (title === "") return;
    counter ++;
    const todo = {
        id: counter,
        title: title,
        completed: false
    }
    todos.push(todo)
     

    //big div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todoDiv');

    // first small div to add text 
    const textDiv = document.createElement('div')
    const serialNumber = document.createElement('h5');
    serialNumber.innerText = 'Todo #' + (counter)
    textDiv.appendChild(serialNumber)
    const todoTitle = document.createElement('h3')
    serialNumber.classList.add('serialNumber')
    todoTitle.classList.add('serialNumber')
    todoTitle.innerText = title;
    textDiv.appendChild(todoTitle)

    // set div, action 
    const actionDiv = document.createElement('div')
    actionDiv.classList.add('actionDiv')
    const completeButton = document.createElement('button')
    completeButton.innerText = 'Mark As Completed'
    actionDiv.appendChild(completeButton)

    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete'
    deleteButton.style.backgroundColor = 'red'
    deleteButton.style.color = 'white'
    deleteButton.style.border = '0'
    deleteButton.style.borderRadius = '2px'
    deleteButton.style.padding = '3px 5px'
    actionDiv.appendChild(deleteButton)

    deleteButton.addEventListener('click', function(e) {
       todosContainer.removeChild(todoDiv)
       const title = todoTitle.innerText;
       todos = todos.filter(todo => todo.filter !== title)
    })

    completeButton.addEventListener('click', function(e) {
        completeButton.innerText = 'Completed';
        completeButton.disabled = true;
        completeButton.style.backgroundColor = 'green'
        completeButton.style.color = 'white'
    })

    todoDiv.appendChild(textDiv)
    todoDiv.appendChild(actionDiv)

    todosContainer.appendChild(todoDiv)
    document.getElementById('todo_text').value = ""

    // TODO 1:  call local storage, make json from todos array, store it to 
    // local storage 
})