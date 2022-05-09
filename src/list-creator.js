import { createHTMLElement } from "./index";
import { renderLists, createDirListener, saveAndRenderList, directoryArr, selectedFolder, clearList } from "./directory-creator";

const folderDisplayContainer = document.querySelector('#to-do-list');
const folderTitle = document.querySelector('.to-do-title');
const taskCount = document.querySelector('.task-count');
const taskContainer = document.querySelector('.tasks');
const taskTemplate = document.querySelector('#task-template');


const listListeners = () => {
    const createTaskBtn = document.querySelector('.create-task-btn');
    createTaskBtn.addEventListener('click', createTask)
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
        const taskDesc =  taskDOM.querySelector('.task-desc');
        taskDesc.textContent = task.name;
        const taskDate = taskDOM.querySelector('.task-date');
        taskContainer.appendChild(taskDOM);
    })
    
}


const renderTasks = () => {
    const selectedList = directoryArr.find(list => list.id === selectedFolder);

    if(selectedFolder == null) {
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
const createTask = () => {
    const listModal = document.querySelector('.modal-container')
    listModal.classList.add('active');
}


export { renderTasks, listListeners }