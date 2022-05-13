import { createHTMLElement, render } from "./index";
import { renderLists, createDirListener, saveAndRenderList, directoryArr, selectedFolder, clearList, save } from "./directory-creator";
import { formatAMPM } from "./date";


const folderDisplayContainer = document.querySelector('#to-do-list');
const folderTitle = document.querySelector('.to-do-title');
const taskCount = document.querySelector('.task-count');
const taskContainer = document.querySelector('.tasks');
const taskTemplate = document.querySelector('#task-template');

// creates listeners for tasks
const listListeners = () => {
    const createTaskBtn = document.querySelector('.create-task-btn');
    createTaskBtn.addEventListener('click', createTaskModal)

    const submitTask = document.querySelector('#add-task');
    submitTask.addEventListener('submit', submitForm);

    taskContainer.addEventListener('click', taskCheck);

    const deleteTasks = document.querySelector('.delete-tasks');
    deleteTasks.addEventListener('click', deleteSelectedTasks)
    
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
        task.desc ? taskDesc.textContent = ` Description: ${task.desc}` : taskDesc.textContent = 'No Description.';
       
        const taskDate = taskDOM.querySelector('.task-date');
        task.date ? taskDate.textContent = ` Complete by: ${task.date}` : taskDate.textContent = 'No Completion Date.';

        const taskPosted = taskDOM.querySelector('.task-posted');
        taskPosted.textContent = `Posted on: ${task.posted}`;

        taskContainer.appendChild(taskDOM);
    })
    
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


export { renderTasks, listListeners }