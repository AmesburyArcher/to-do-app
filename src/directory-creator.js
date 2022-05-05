import { createHTMLElement } from "./index";

const LOCAL_STORAGE_DIR_KEY = 'task.list';
const LOCAL_STORAGE_FOLDER_KEY = 'task.selectedFolder';

let selectedFolder = localStorage.getItem(LOCAL_STORAGE_FOLDER_KEY)

let directoryArr = JSON.parse(localStorage.getItem(LOCAL_STORAGE_DIR_KEY)) || []; 

const saveAndRenderList = () => {
    save();
    renderLists();
}

const save = () => {
    localStorage.setItem(LOCAL_STORAGE_DIR_KEY, JSON.stringify(directoryArr));
}

const renderLists = () => {
    const directoryContainer = document.querySelector('.directory');

    clearList(directoryContainer);
    directoryArr.forEach(directory => {
       const directoryFolder = createHTMLElement('li', null, ['directory-folder'], directory.name)
       directoryFolder.dataset.listId = directory.id;
       if(directory.id === selectedFolder) {
           directoryFolder.classList.add('directory-active');
           console.log('this works');
       };
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
    const dirContainer = document.querySelector('.directory');

    dirForm.addEventListener('submit', createDirectory)
    dirContainer.addEventListener('click', selectedDirectory)
}

const createDirectory = (e) => {
    const dirText = document.querySelector('.add-dir-btn-text');

    e.preventDefault();
    const dirName = dirText.value;
    if(dirName == null || dirName === '') return;
    const directory = createNewDir(dirName);
    dirText.value = null;
    directoryArr.push(directory);
    saveAndRenderList();
}

const selectedDirectory = (e) => {
    if(e.target.tagName.toLowerCase() === 'li') {
        selectedFolder = e.target.dataset.listId;
        saveAndRenderList();
    }
}

const createNewDir = (dir) => {
   return { id: Date.now().toString(), name: dir, tasks: [] }
}

export { renderLists, createDirListener, saveAndRenderList }