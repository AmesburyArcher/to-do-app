import { createHTMLElement } from "./index";
import { renderLists, createDirListener, saveAndRenderList, directoryArr, selectedFolder, clearList } from "./directory-creator";

const folderDisplayContainer = document.querySelector('#to-do-list');
const folderTitle = document.querySelector('.to-do-title');
const taskCount = document.querySelector('.task-count');
const taskContainer = document.querySelector('.tasks');
const taskTemplate = document.querySelector('#task-template');
const selectedList = directoryArr.find(list => list.id === selectedFolder);

const renderTaskNum = (selected) => {
    const incomplete = selectedList.tasks.filter(task => !task.complete).length;
    const tasksString = incomplete === 1 ? "task" : "tasks";
    taskCount.textContent = `${incomplete} ${tasksString} remaining`;
}

const renderTaskList = (selected) => {
    selected.tasks.forEach(task => {
        const taskDOM = document.importNode(taskTemplate.content, true)
        const checkBox = taskDOM.querySelector('input');
        checkBox.id = task.id;
        checkBox.checked = task.complete;
        const taskDesc =  taskDOM.querySelector('.task-desc');
        taskDesc.textContent = task.name;
        taskContainer.appendChild(taskDOM);
        console.log('im working');
    })
    console.log('firing');
}


const renderTasks = () => {

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


export { removeTaskDisplay, renderTasks }