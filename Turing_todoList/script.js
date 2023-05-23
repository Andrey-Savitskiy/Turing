const floating_btn = document.querySelector('#floating_btn');
const hide_menu = document.querySelector('#hide_menu');
const add_todo = document.querySelector('#add_todo');
const default_text = document.querySelector('#default_text');
const clear_text_box = document.querySelector('#clear_text_box');
const floating_menu = document.querySelector('.floating_menu');

const API = 'https://jsonplaceholder.typicode.com/todos';


/*btn clicks*/
floating_btn.addEventListener('click', function(){	
    floating_menu.classList.toggle('floating_menu_active');
});
        
hide_menu.addEventListener('click', function(){	
    floating_menu.classList.toggle('floating_menu_active');
});


/*todo*/
const display_task = document.querySelector('.display_task');
const total_task = document.querySelector('#total_task');
const list = document.querySelectorAll('.display_task .task');
const form = document.querySelector('.form');

let task_length = list.length;


buildtodo(15);

function buildtodo(limit) {
fetch(API + `?_limit=${limit}`)
    .then((res) => res.json())
    .then((currentList) => {
    task_length += limit;
    total_task.innerHTML = "<i class='bx bx-task'></i> " + task_length;
    currentList.forEach((item) => {
        generateTodo(item.title, '1');
    });
    });
}


/*clear text btn click*/
clear_text_box.addEventListener('click', function(e){ 
  e.preventDefault();
  form.task_title.value = '';
  form.task_description.value = '';
});


/*add todo btn click*/
add_todo.addEventListener('click', function(e){
   e.preventDefault();
   const todo_title = form.task_title.value.trim();
    if (todo_title.length){
 		task_length = task_length + 1;
    total_task.innerHTML = "<i class='bx bx-task'></i> " + task_length;
 		generateTodo(todo_title);
 		Form.reset();
 	}else{
 		alert("Sorry, you didn't type anything.");
 	}
});


/*generate Todo*/
const generateTodo = (todo_title) => {
    const html = `<div class="task" id="todo_ ${task_length}">
				<p>${todo_title}</p>
				<span class="delete_todo">x</span>
			</div>`;
      if (task_length > 0) {
         default_text.style.opacity = '0';
      }
 	    display_task.innerHTML += html;
      floating_menu.classList.toggle('floating_menu_active');
};

/*delete todo btn click*/
display_task.addEventListener("click" , function(e){
  if(e.target.classList.contains("delete_todo")){
    e.target.parentElement.remove();
    task_length = task_length - 1;
    if (task_length==0) {
       default_text.style.opacity = '1';
    }
    total_task.innerHTML = "<i class='bx bx-task'></i> " + task_length;
  }
});
