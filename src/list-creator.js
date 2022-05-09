import { createHTMLElement, render } from "./index";
import { renderLists, createDirListener, saveAndRenderList, directoryArr, selectedFolder, clearList, save } from "./directory-creator";

const folderDisplayContainer = document.querySelector('#to-do-list');
const folderTitle = document.querySelector('.to-do-title');
const taskCount = document.querySelector('.task-count');
const taskContainer = document.querySelector('.tasks');
const taskTemplate = document.querySelector('#task-template');


const listListeners = () => {
    const createTaskBtn = document.querySelector('.create-task-btn');
    createTaskBtn.addEventListener('click', createTaskModal)

    const submitTask = document.querySelector('#add-task');
    submitTask.addEventListener('submit', submitForm);

    taskContainer.addEventListener('click', taskCheck);

    const deleteTasks = document.querySelector('.delete-tasks');
    deleteTasks.addEventListener('click', deleteSelectedTasks)
    
}

const deleteSelectedTasks = () => {
    const selectedList = directoryArr.find(list => list.id === selectedFolder);
    selectedList.tasks = selectedList.tasks.filter(task => !task.complete);
    render();
}

const taskCheck = (e) => {
    if(e.target.tagName.toLowerCase() === 'input') {
        const selectedList = directoryArr.find(list => list.id === selectedFolder);
        const selectedTask = selectedList.tasks.find(task => task.id === e.target.id) 
        selectedTask.complete = e.target.checked;
        save();
        renderTaskNum(selectedList);
    }
}

const renderTaskNum = (selectedTaskNum) => {
    const incomplete = selectedTaskNum.tasks.filter(task => !task.complete).length;
    const tasksString = incomplete === 1 ? "task" : "tasks";
    taskCount.textContent = `${incomplete} ${tasksString} remaining`;
}

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

        taskContainer.appendChild(taskDOM);
    })
    
}


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

//YOU WERE LAST HERE WORKING ON THIS NEED TO TOGGLE CLASS TO DISPLAY MODAL TO INPUT NEW TASK*******
const createTaskModal = () => {
    const listModal = document.querySelector('.modal-container')
    listModal.classList.add('active');
}

const submitForm = (e) => {
    e.preventDefault();
    const listModal = document.querySelector('.modal-container')
    const taskInputName = document.querySelector('#task');
    const taskInputDesc = document.querySelector('#description');
    const taskInputDate = document.querySelector('#date');
    
    const taskName = taskInputName.value;
    if(taskName == null || taskName === '') return;
    const taskDesc = taskInputDesc.value;
    const taskDate = taskInputDate.value
    const task = createTask(taskName, taskDesc, taskDate);
    taskInputName.value = null;
    taskInputDesc.value = null;
    taskInputDate.value = null;
    const selectedList = directoryArr.find(list => list.id === selectedFolder);
    selectedList.tasks.push(task);
    listModal.classList.remove('active');
    render();
}

const createTask = (task, desc, date) => {
    return {  id: Date.now().toString(), name: task, desc: desc, date: date, complete: false,  }
}


export { renderTasks, listListeners }