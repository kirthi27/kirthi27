
let button=document.getElementById('add');
let todolist=document.getElementById('todoList');
let input=document.getElementById('input');
let btndel=document.getElementById('delete')

let todos=[];

window.onload=()=>{
    todos=json.parse(localStorage.getItem('todos'))||[]
    todos.forEach(todo => addtodo(todo))
        
}

button.addEventListener('click',()=> {
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    addtodo(input.value)
    input.value = ''
})

btndel.addEventListener('click',()=> {
    debugger;
    remove(input.value)
   // localStorage.setItem('todos',JSON.stringify(todos))
   
})

function addtodo(todo){
    let para = document.createElement('span');
    para.innerText= todo;
    para.classList.add(todos.length-1);
    todolist.appendChild(para);
    let myDiv = document.getElementById("todoList");
    let button = document.createElement('BUTTON');
    let text = document.createTextNode("X");

    // appending text to button
    button.appendChild(text);
    button.classList.add(todos.length-1);
    button.addEventListener("click", remove);
    
    // appending button to div
    myDiv.appendChild(button);
    var br = document.createElement('br');
    myDiv.appendChild(br);
    myDiv.appendChild(br);
    
    

}

function remove(todo){
    debugger;
    var elementClass = todo.target.className;
    todos.splice(typeof Number(elementClass), 1);
    document.getElementsByClassName(elementClass)[0].remove();
    document.getElementsByClassName(elementClass)[0].remove();
    localStorage.setItem('todos', JSON.stringify(todos))
}

// if (elementClass !== '') {
    //     console.log(elementClass);
    //   }
    //   // If element has no classes
    //   else {
    //     console.log('An element without a class was clicked');
    //   }
    // let index=todos.indexof(todo)
    // todos.splice(index, 1);
        // document.querySelectorAll(elementClass).forEach(el => el.remove()); //multi remove