import { createDirListener, saveAndRenderList} from "./directory-creator";
import { toggleTheme } from "./toggleTheme";
import { renderTasks, listListeners } from "./list-creator"
import { displayDate } from "./date";

function createHTMLElement(type, id, classes, content) {
    const element = document.createElement(type);

    if(id) element.id = id;
    if(classes) {
        classes.forEach((myClass) => element.classList.add(myClass));
    }
    if(content) element.textContent = content;

    return element;
}

const render = () => {
    saveAndRenderList();
    renderTasks();
}

const onLoad = () => {
    toggleTheme();
    render();
    createDirListener();
    listListeners(); 
    displayDate();
    time;
}

const time = setInterval(displayDate, 1000);

onLoad();

export {
    createHTMLElement, render
}