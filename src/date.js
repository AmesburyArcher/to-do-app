const displayDate = () => {
    const dateDOM = document.querySelector('.current-date');
    dateDOM.textContent = formatAMPM()
}

function formatAMPM() {
    const d = new Date()
    let minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes();
    let hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours();
    let ampm = d.getHours() >= 12 ? 'pm' : 'am';
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

export { displayDate }