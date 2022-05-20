import { render } from "./index";
import { directoryArr, selectedFolder, clearList, save } from "./directory-creator";
import { formatAMPM } from "./date";


const folderDisplayContainer = document.querySelector('#to-do-list');
const folderTitle = document.querySelector('.to-do-title');
const taskCount = document.querySelector('.task-count');
const taskContainer = document.querySelector('.tasks');
const taskTemplate = document.querySelector('#task-template');

// creates listeners for tasks
const listListeners = () => {

    // create new task button
    const createTaskBtn = document.querySelector('.create-task-btn');
    createTaskBtn.addEventListener('click', createTaskModal)

    // submit new task button
    const submitTask = document.querySelector('#add-task');
    submitTask.addEventListener('submit', submitForm);

    //check if complete
    taskContainer.addEventListener('click', taskCheck);

    //edit task
    taskContainer.addEventListener('click', editTaskDetails);

    // delete selected tasks button
    const deleteTasks = document.querySelector('.delete-tasks');
    deleteTasks.addEventListener('click', deleteSelectedTasks)

    // close task modal
    const closeTask = document.querySelector('.close-task-modal');
    closeTask.addEventListener('click', closeTaskModal);
    
}

// deletes selected tasks
const deleteSelectedTasks = () => {
    const selectedList = directoryArr.find(list => list.id === selectedFolder);
    selectedList.tasks = selectedList.tasks.filter(task => !task.complete);
    render();
}

// checks if task is marked complete
const taskCheck = (e) => {
    if(e.target.tagName.toLowerCase() === 'input') {
        const selectedList = directoryArr.find(list => list.id === selectedFolder);
        const selectedTask = selectedList.tasks.find(task => task.id === e.target.id) 
        selectedTask.complete = e.target.checked;
        save();
        renderTaskNum(selectedList);
    }
}

// renders and displays to DOM number of tasks remaining to complete
const renderTaskNum = (selectedTaskNum) => {
    const incomplete = selectedTaskNum.tasks.filter(task => !task.complete).length;
    const tasksString = incomplete === 1 ? "task" : "tasks";
    taskCount.textContent = `${incomplete} ${tasksString} remaining`;
}

// function used to create the task element for the DOM
const renderTaskList = (selectedTaskList) => {
    selectedTaskList.tasks.forEach(task => {
        const taskDOM = document.importNode(taskTemplate.content, true)
        const checkBox = taskDOM.querySelector('input');
        checkBox.id = task.id;
        checkBox.checked = task.complete;
        const taskName =  taskDOM.querySelector('.task-name');
        taskName.textContent = task.name;

        const taskDesc = taskDOM.querySelector('.task-desc')
        task.desc ? taskDesc.textContent = ` Description: ${task.desc}` : taskDesc.textContent = 'No Description';
       
        const taskDate = taskDOM.querySelector('.task-date');
        task.date ? taskDate.textContent = ` Complete by: ${task.date}` : taskDate.textContent = 'No Completion Date';

        const taskPosted = taskDOM.querySelector('.task-posted');
        taskPosted.textContent = `Posted on: ${task.posted}`;

        const editTask = taskDOM.querySelector('.edit-task');
        editTask.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="edit-task-icon" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" /><line x1="13.5" y1="6.5" x2="17.5" y2="10.5" /></svg>'

        taskContainer.appendChild(taskDOM);
    })
    
}

// function to edit task details
const editTaskDetails = (e) => {

    const selectedList = directoryArr.find(list => list.id === selectedFolder); 
    const selectedElement = e.target.parentNode.parentNode;
    const selectedTask = Array.from(selectedElement.parentNode.children).indexOf(selectedElement)

    const taskInputName = document.querySelector('.task-edit');
    const taskInputDesc = document.querySelector('.description-edit');
    const taskInputDate = document.querySelector('.date-edit');

    let items = selectedList.tasks[selectedTask];
    const taskEditModal = document.querySelector('.modal-container-edit');
    const taskEditForm = document.querySelector('#add-task-edit');

    if(e.target.classList.contains('edit-task-icon') || e.target.classList.contains('edit-task')) {
       taskInputName.value = items.name;
       items.desc ? taskInputDesc.value = items.desc : taskInputDesc.value = '';
       items.date ? taskInputDate.value = items.date : taskInputDate.value = '';
       
       taskEditModal.classList.add('active');
       
       // function to submit task edit form
        const submitTaskEdit = (e) => {
            e.preventDefault();
            items.name = taskInputName.value;
            items.desc = taskInputDesc.value;
            items.date = taskInputDate.value;
            items = '';
            taskEditModal.classList.remove('active');
            taskEditForm.removeEventListener('submit', submitTaskEdit);
            renderTasks();
            save();
        }

        // function to close task edit modal
        const closeEditTask = () => {
            taskEditForm.removeEventListener('submit', submitTaskEdit);
            taskEditModal.classList.remove('active');
            closeEditTaskModal.removeEventListener('click', closeEditTask);
        }

        const closeEditTaskModal = document.querySelector('.close-task-modal-edit');
        closeEditTaskModal.addEventListener('click', closeEditTask)

       taskEditForm.addEventListener('submit', submitTaskEdit)
    }

}

// renders the tasks from the selected folder on the screen
const renderTasks = () => {
    const selectedList = directoryArr.find(list => list.id === selectedFolder);

    if(selectedList == null) {
        folderDisplayContainer.style.display = 'none';
    } else {
        folderDisplayContainer.style.display = '';
        folderTitle.textContent = selectedList.name;
        renderTaskNum(selectedList);
        clearList(taskContainer);
        renderTaskList(selectedList);
    }
}

// closes the task modal with click of button
const closeTaskModal = () => {
    const listModal = document.querySelector('.modal-container')
    listModal.classList.remove('active');
}

// function that displays modal to add new task
const createTaskModal = () => {
    const listModal = document.querySelector('.modal-container')
    listModal.classList.add('active');
}

// function that processes the input from the create task modal and submits it for storage and display
const submitForm = (e) => {
    e.preventDefault();
    const listModal = document.querySelector('.modal-container')
    const taskInputName = document.querySelector('#task');
    const taskInputDesc = document.querySelector('#description');
    const taskInputDate = document.querySelector('#date');
    const taskPosted = formatAMPM();
    
    const taskName = taskInputName.value;
    if(taskName == null || taskName === '') return;
    const taskDesc = taskInputDesc.value;
    const taskDate = taskInputDate.value
    const task = createTask(taskName, taskDesc, taskDate, taskPosted);
    taskInputName.value = null;
    taskInputDesc.value = null;
    taskInputDate.value = null;
    const selectedList = directoryArr.find(list => list.id === selectedFolder);
    selectedList.tasks.push(task);
    listModal.classList.remove('active');
    render();
}

// this function creates the task object to be pushed into the directoryArr.tasks array
const createTask = (task, desc, date, posted) => {
    return {  id: Date.now().toString(), name: task, desc: desc, date: date, posted: posted, complete: false,  }
}


export { renderTasks, listListeners, submitForm, editTaskDetails }