const toggleTheme = () => {

const toggle = document.querySelector('.light-dark-mode');
toggle.addEventListener('click', toggleMode);

let darkMode = localStorage.getItem('darkMode');
const currentTheme = document.querySelector('.current-theme');

if(darkMode === 'enabled') {
    localStorage.setItem('darkMode', 'enabled')
    document.body.classList.add('active');
    toggle.classList.add('active');
    currentTheme.textContent = 'Dark Mode'
}

function toggleMode() {
    darkMode = localStorage.getItem('darkMode')
    if(darkMode !== 'enabled') {
        localStorage.setItem('darkMode', 'enabled')
        document.body.classList.add('active');
        toggle.classList.add('active');
    } else {
        localStorage.setItem('darkMode', null)
        document.body.classList.remove('active');
        toggle.classList.remove('active');
    }

    if(toggle.classList.contains('active')) { 
        currentTheme.textContent = 'Dark Mode';
    } else {
        currentTheme.textContent = 'Light Mode';
    };
}
}

export { toggleTheme }