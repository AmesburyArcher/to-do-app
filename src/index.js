import { renderLists, createDirListener, saveAndRenderList } from "./directory-creator";


const header = document.querySelector('#header');
const sidebar = document.querySelector('#sidebar');
const main = document.querySelector('#main');
const footer = document.querySelector('#footer');

function createHTMLElement(type, id, classes, content) {
    const element = document.createElement(type);

    if(id) element.id = id;
    if(classes) {
        classes.forEach((myClass) => element.classList.add(myClass));
    };
    if(content) element.textContent = content;

    return element;
};


saveAndRenderList();
createDirListener();

export {
    createHTMLElement
}