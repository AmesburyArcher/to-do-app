import { editTaskDetails, submitForm } from "./list-creator";

// Below here until next comment deals with initial task creation form validation

const validateDate = () => {
    const taskDateInput = document.querySelector('#date');
    const submitTask = document.querySelector('#add-task');

    let today = new Date().toISOString().slice(0, 10).split('-');
    let dateInput = taskDateInput.value;
    dateInput = dateInput.split('-');

    today = parseInt(today.join(''))
    dateInput = parseInt(dateInput.join(''))

    if((today - dateInput) <= 1) {
        taskDateInput.setCustomValidity('');
        submitTask.addEventListener('submit', submitForm)
        return false
    } else {
        taskDateInput.setCustomValidity('Inputted date must be equal to current date or beyond');
        taskDateInput.reportValidity();
        submitTask.removeEventListener('submit', submitForm);
        return true
    }
}

const validateDateInput = () => {

    const taskDateInput = document.querySelector('#date');

    taskDateInput.addEventListener('input', validateDate);
}

const validateTaskFormInput = (e) => {
    const taskName = document.querySelector('#task');
    const taskDate = document.querySelector('#date');
    
    if(!taskName.validity.valid) {
        e.preventDefault();
        taskName.setCustomValidity('You must enter a task name')
        taskName.reportValidity();
    }
    if(taskDate.value.length > 1) {
        taskDate.required = true;
        if(validateDate() === true) {
            e.preventDefault();
            validateDate();
        } else {
            taskDate.required = false;
        }
    }
    
}

const validateTaskForm = () => {
    const addTaskForm = document.querySelector('#add-task');

    addTaskForm.addEventListener('submit', validateTaskFormInput)
}

// Below here deals with the task edit modal form validation

const validateDateInputEdit = () => {

    const taskDateInput = document.querySelector('.date-edit');

    taskDateInput.addEventListener('input', validateDateEdit);
}

const validateDateEdit = () => {
    const taskDateInputEdit = document.querySelector('.date-edit');
    const submitTask = document.querySelector('#add-task-edit');

    let today = new Date().toISOString().slice(0, 10).split('-');
    let dateInput = taskDateInputEdit.value;
    dateInput = dateInput.split('-');

    today = parseInt(today.join(''))
    dateInput = parseInt(dateInput.join(''))

    if((today - dateInput) <= 1) {
        taskDateInputEdit.setCustomValidity('');
        submitTask.addEventListener('submit', editTaskDetails)
        return false
    } else {
        taskDateInputEdit.setCustomValidity('Inputted date must be equal to current date or beyond');
        taskDateInputEdit.reportValidity();
        submitTask.removeEventListener('submit', editTaskDetails);
        return true
    }
}

const validateTaskFormInputEdit = (e) => {
    const taskName = document.querySelector('.task-edit');
    const taskDate = document.querySelector('.date-edit');
    
    if(!taskName.validity.valid) {
        e.preventDefault();
        taskName.setCustomValidity('You must enter a task name')
        taskName.reportValidity();
    }
    if(taskDate.value.length > 1) {
        taskDate.required = true;
        if(validateDateEdit() === true) {
            e.preventDefault();
            validateDateEdit();
        } else {
            taskDate.required = false;
        }
    }
    
}

const validateTaskFormEdit = () => {
    const addTaskForm = document.querySelector('#add-task');

    addTaskForm.addEventListener('submit', validateTaskFormInputEdit)
}

export { validateDateInput, validateTaskForm, validateTaskFormEdit, validateDateInputEdit };