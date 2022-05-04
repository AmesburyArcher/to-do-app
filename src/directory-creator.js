import { createHTMLElement } from "./index";

let directoryArr = [
    {
        id: 1,
        name: 'name'
    }, {
        id: 2,
        name: 'todo'
    }
]

const renderLists = () => {
    const directoryContainer = document.querySelector('.directory');

    clearList(directoryContainer);
    directoryArr.forEach(directory => {
       const directoryFolder = createHTMLElement('li', null, ['directory-folder', 'directory-active'], directory.name)
       directoryFolder.dataset.listId = directoryArr.id;
       directoryContainer.appendChild(directoryFolder); 
    })
};

const clearList = (list) => {
    while(list.firstChild) {
        list.removeChild(list.firstChild)
    }
};

const createDirListener = () => {
    const dirForm = document.querySelector('#add-dir-form');

    dirForm.addEventListener('submit', createDirectory)
}

const createDirectory = (e) => {
    const dirText = document.querySelector('.add-dir-btn-text');

    e.preventDefault();
    const dirName = dirText.value;
    if(dirName == null || dirName === '') return;
    const directory = createNewDir(dirName);
    dirText.value = null;
    directoryArr.push(directory);
    renderLists();
}

const createNewDir = (dir) => {
   return { id: Date.now().toString(), name: dir, tasks: [] }
}

export { renderLists, createDirListener }