import { createDirListener, saveAndRenderList, renderLists, directoryArr, selectedFolder } from "./directory-creator";
import { toggleTheme } from "./toggleTheme";
import { removeTaskDisplay, renderTasks } from "./list-creator"

function createHTMLElement(type, id, classes, content) {
    const element = document.createElement(type);

    if(id) element.id = id;
    if(classes) {
        classes.forEach((myClass) => element.classList.add(myClass));
    };
    if(content) element.textContent = content;

    return element;
};

const render = () => {
    saveAndRenderList();
    renderTasks();
}

function hello() {
    console.log('allo world')
}

hello();

toggleTheme();
render();
createDirListener();

export {
    createHTMLElement, render
}