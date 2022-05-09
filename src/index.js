import { createDirListener, saveAndRenderList, renderLists, directoryArr, selectedFolder } from "./directory-creator";
import { toggleTheme } from "./toggleTheme";
import { renderTasks, listListeners } from "./list-creator"

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

toggleTheme();
render();
createDirListener();
listListeners();

export {
    createHTMLElement, render
}