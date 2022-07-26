
// adds an event listener when page loads
// creates a form constant to store the form element in the DOM with id of "new-task-form"
// creates a task list constant to store the div id of "tasks"

window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const listElement = document.querySelector('#tasks');
    

    // adds an event listener to the form constant after page is loaded
    // when the load event triggers, run method preventDefault()
    // creates a new task constant to store the value of the input field
    // if is not empty, create a new li element with the value of the task constant
    // append the li element to the task list constant
    // if it is empty, alert the user that they need to enter a task

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const task = input.value;
        if(!task) {
            alert('Please add a task!');
            return;
        }

        // creates a new constant that is a new div element 
        const taskElement = document.createElement('div');
        // adds a class of "task" to the new constant
        taskElement.classList.add('task');

        // creates a new constant that is a  div element
        const taskElementContent = document.createElement('div');
        // adds a class of "task-content" to the new constant
        taskElementContent.classList.add('task-content');

        // appends element content div to the task element div
        taskElement.appendChild(taskElementContent);
        // creates constant that is an input element
        const taskElementInput = document.createElement('input');
        // assign the input element with a class of text
        taskElementInput.classList.add('text')
        // assigns the data-type of input to text
        taskElementInput.type = 'text';
        // gives input the default innerHTML of 'task'
        taskElementInput.value = task;
        // assigns the input element the attribtue of 'readonly'
        taskElementInput.setAttribute('readonly', 'readonly;');

        // appends the input element to the task element content div
        taskElementContent.appendChild(taskElementInput);

        // creates a new constant that is a div element
        const taskActionsElement = document.createElement('div');
        // assigns the div element a class of 'task-actions'
        taskActionsElement.classList.add('task-actions');

        // creates a button element and assigns it to const of 'delete'
        const taskElementEdit = document.createElement('button');
        // assigns the button element a class of 'edit'
        taskElementEdit.classList.add('edit');
        // assigns the button element an innerHTML of 'edit'
        taskElementEdit.innerHTML = 'Edit';

        // creates a button element and assigns it to const of 'delete'
        const taskElementDelete = document.createElement('button')
        // assigns the button element a class of 'delete'
        taskElementDelete.classList.add('delete');
        // assigns the button element an innerHTML of 'delete'
        taskElementDelete.innerHTML = 'Delete';

        // appends the edit button element to the task actions div
        taskActionsElement.appendChild(taskElementEdit);

        // appends the delete button element to the task actions div
        taskActionsElement.appendChild(taskElementDelete);

        // appends the task actions div to the task element div
        taskElement.appendChild(taskActionsElement);

        // appends the div with the class of 'task' to the the div with the id of 'tasks'
        listElement.appendChild(taskElement);

        input.value = '';

        // adds an event listener to the edit button element
        taskElementEdit.addEventListener('click', () => {
            // if the edit button is clicked and the inner text is 'edit'
           if(taskElementEdit.innerText.toLowerCase() ==
            'edit') {
                // allow for the input field to be editable
                taskElementInput.removeAttribute('readonly');
                // while text is editable, change the inner text to 'save'
                taskElementEdit.innerText = 'Save';
            } else if (taskElementEdit.innerText.toLowerCase() ==
            'save') {
                taskElementInput.setAttribute('readonly', 'readonly;');
                // while text is not editable, change the inner text to 'edit'
                taskElementEdit.innerText = 'Edit';
                // save the new value of input field to local storage
                localStorage.setItem(taskElementInput.value, taskElementInput.value);
            }


        })

        // adds an event listener to the delete button element
        taskElementDelete.addEventListener('click', () => {
        // if the delete button is clicked, remove the task from the list
            listElement.removeChild(taskElement);
        })

    })

    // after a save button is clicked and input field is saved in local storage,
    if(localStorage.length > 0) {
        for(let i = 0; i < localStorage.length; i++) {
            const task = localStorage.getItem(localStorage.key(i));
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
        }
    }
    // the list is saved if the user clicks the save button
})

