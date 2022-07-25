window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const listElement = document.querySelector('#tasks');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const task = input.value;
        if(!task) {
            alert('Please add a task!');
            return;
        }
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        const taskElementContent = document.createElement('div');
        taskElementContent.classList.add('task-content');

        taskElement.appendChild(taskElementContent);

        const taskElementInput = document.createElement('input');
        taskElementInput.classList.add('text')
        taskElementInput.type = 'text';
        taskElementInput.value = task;
        taskElementInput.setAttribute('readonly', 'readonly;');

        taskElementContent.appendChild(taskElementInput);

        const taskActionsElement = document.createElement('div');
        taskActionsElement.classList.add('task-actions');
        
        const taskElementEdit = document.createElement('button');
        taskElementEdit.classList.add('edit');
        taskElementEdit.innerHTML = 'Edit';

        const taskElementDelete = document.createElement('button')
        taskElementDelete.classList.add('delete');
        taskElementDelete.innerHTML = 'Delete';

        taskActionsElement.appendChild(taskElementEdit);
        taskActionsElement.appendChild(taskElementDelete);

        taskElement.appendChild(taskActionsElement);

        listElement.appendChild(taskElement);

        input.value = '';

        taskElementEdit.addEventListener('click', () => {
           if(taskElementEdit.innerText.toLowerCase() ==
            'edit') {
               taskElementInput.removeAttribute('readonly');
               taskElementInput.focus();
               taskElementEdit.innerText = 'Save';
           } else {
            console.log('save')

        }

        taskElementDelete.addEventListener('click', () => {
            
        });
    })
})

// function solution(number){
//     let multiples = [];
//     for(let i = 1; i <= number; i++){
//         if(i % 3 == 0 || i % 5 == 0){
//             multiples.push(i);
//         }
//     } 
//     return multiples.reduce((a, b) => a + b);
// }


