

function createHTMLElement(type, id, classes, content) {
    const element = document.createElement(type);

    if(id) element.id = id;
    if(classes) {
        classes.forEach((myClass) => element.classList.add(myClass));
    };
    if(content) element.textContent = content;

    return element;
};

export {
    createHTMLElement
}