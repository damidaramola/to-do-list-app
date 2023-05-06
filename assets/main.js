window.addEventListener('load',()=>{
    const form = document.querySelector('#new-form');
    const input = document.querySelector('#new-input');
    const list_element = document.querySelector('#tasks');

    // functionality of adding tasks to list
    form.addEventListener('submit',(e) =>{
     e.preventDefault();
   
    
    const task = input.value;

    if (!task){
        alert('Please fill out task');
        return;
    } 
    
    const task_element = document.createElement('div');
    task_element.classList.add('task');

    const task_content_element = document.createElement('div'); 
    task_content_element.classList.add('content');
    

    task_element.appendChild(task_content_element);

    const task_input_element = document.createElement('input');
    task_input_element.classList.add('text');
    task_input_element.type = 'text';
    task_input_element.value = task;
    task_input_element.setAttribute('readonly','readonly');
    
    task_content_element.appendChild(task_input_element);

    
    const task_actions_element = document.createElement('div');
    task_actions_element.classList.add('actions');

    const task_edit_element= document.createElement('button');
    task_edit_element.classList.add('edit-field');

    const task_delete_element = document.createElement('button');
    task_delete_element.classList.add('delete-field');

    list_element.appendChild(task_element);
     })
})