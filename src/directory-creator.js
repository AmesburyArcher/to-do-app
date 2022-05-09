import { createHTMLElement, render } from "./index";
import { renderTasks } from "./list-creator";

const LOCAL_STORAGE_DIR_KEY = 'task.list';
const LOCAL_STORAGE_FOLDER_KEY = 'task.selectedFolder';

//local storage keys + array
let selectedFolder = localStorage.getItem(LOCAL_STORAGE_FOLDER_KEY)
let directoryArr = JSON.parse(localStorage.getItem(LOCAL_STORAGE_DIR_KEY)) || []; 

const saveAndRenderList = () => {
    save();
    renderLists();
}

//saves to local storage
const save = () => {
    localStorage.setItem(LOCAL_STORAGE_DIR_KEY, JSON.stringify(directoryArr));
    localStorage.setItem(LOCAL_STORAGE_FOLDER_KEY, selectedFolder);
}

//renders the directory list
const renderLists = () => {
    const directoryContainer = document.querySelector('.directory');

    clearList(directoryContainer);
    directoryArr.forEach(directory => {
       const directoryFolder = createHTMLElement('li', null, ['directory-folder'], directory.name)
       directoryFolder.dataset.listId = directory.id;
       //if the folder is selected, make it active folder
       if(directory.id === selectedFolder) {
           directoryFolder.classList.add('directory-active');
       };
       directoryContainer.appendChild(directoryFolder); 

       const directoryFolderIcons = createHTMLElement('span', null, ['directory-folder-icons'], null);
       directoryFolderIcons.innerHTML = '<button class="button-edit"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-edit" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" /><line x1="13.5" y1="6.5" x2="17.5" y2="10.5" /></svg></button><button class="button-trash"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-trash" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="4" y1="7" x2="20" y2="7" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg></button>';
       //if the folder is selected, add the icons
       if(directoryFolder.classList.contains('directory-active')) {
       directoryFolder.appendChild(directoryFolderIcons);
       };
    })
};

//clears the directory list to be re-rendered in renderLists
const clearList = (list) => {
    while(list.firstChild) {
        list.removeChild(list.firstChild)
    }
};

//adds eventlisteners for the directory
const createDirListener = () => {
    const dirForm = document.querySelector('#add-dir-form');
    const dirContainer = document.querySelector('.directory');

    dirForm.addEventListener('submit', createDirectory)
    dirContainer.addEventListener('click', selectedDirectoryListener)
    dirContainer.addEventListener('click', deleteDir)
    dirContainer.addEventListener('click', editDir)
}

//creates a new directory folder
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

//function for the selected directory listener
const selectedDirectoryListener = (e) => {
    if(e.target.tagName.toLowerCase() === 'li') {
        selectedFolder = e.target.dataset.listId;
        saveAndRenderList();
        renderTasks();
    }
}

//function for the deletedir listener 
const deleteDir = (e) => {
    if(e.target.classList.contains('icon-trash') && e.target.parentElement.parentElement.parentElement.dataset.listId === selectedFolder) {
        directoryArr = directoryArr.filter(directory => directory.id !== selectedFolder);
        selectedFolder = null;
        saveAndRenderList();
        renderTasks();
    }
}
//Editing the directory folder title and updating the array + DOM
const editDir = (e) => {
    if(e.target.classList.contains('icon-edit') && e.target.parentElement.parentElement.parentElement.dataset.listId === selectedFolder) {
        const directoryModal = document.querySelector('.directory-modal-container');
        directoryModal.classList.toggle('active');
        const editDirBtn = document.querySelector('#directory-edit-form');
        const closeEditDirBtn = document.querySelector('.icon-tabler-square-x');

        const editDirForm = (e) => {
            e.preventDefault();
            const directoryModalText = document.querySelector('#text-dir');
            const directoryReName = directoryModalText.value;
            if(directoryReName == null || directoryReName === '') return;
            directoryArr.forEach(dir => {
                if(dir.id === selectedFolder) {
                    dir.name = directoryReName
                }
            })
            directoryModalText.value = null;
            saveAndRenderList();
            // const directoryModal = document.querySelector('.directory-modal-container');
            directoryModal.classList.toggle('active');
            editDirBtn.removeEventListener('submit', editDirForm);
        }

        const closeEditDir = () => {
            directoryModal.classList.toggle('active');
            editDirBtn.removeEventListener('submit', editDirForm);
            closeEditDirBtn.removeEventListener('click', closeEditDir);
        }

        closeEditDirBtn.addEventListener('click', closeEditDir);
        editDirBtn.addEventListener('submit', editDirForm);
    }
    

}

//creates a directory folder object to be pushed into directory array
const createNewDir = (dir) => {
   return { id: Date.now().toString(), name: dir, tasks: [{
       id: 'shghjajhf',
       name: 'test',
       complete: false
   }] }
}

export { renderLists, createDirListener, saveAndRenderList, directoryArr, selectedFolder, clearList }