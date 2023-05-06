window.addEventListener('load',()=>{
    const form = document.querySelector('#new-form');
    const input = document.querySelector('#new-input');
    const list_element = document.querySelector('#tasks');

    form.addEventListener('submit',(e) =>{
     e.preventDefault();
   
    
    const task = input.value;

    if (!task){
        alert("Please fill out task");
    } else {
        console.log("success");
    }
     })
})