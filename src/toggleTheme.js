const toggleTheme = () => {

const toggle = document.querySelector('.light-dark-mode');
toggle.addEventListener('click', toggleMode);

function toggleMode() {
    document.body.classList.toggle('active');
    toggle.classList.toggle('active');

    const currentTheme = document.querySelector('.current-theme');

    if(toggle.classList.contains('active')) { 
        currentTheme.textContent = 'Dark Mode';
    } else {
        currentTheme.textContent = 'Light Mode';
    };
}
}

export { toggleTheme }