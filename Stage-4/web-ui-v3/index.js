
const clock1Ele = document.getElementById('clock-1');
const clock2Ele = document.getElementById('clock-2');
const clock3Ele = document.getElementById('clock-3');


// component class
function Clock(props) {
    let { timeZone } = props; // de-structuring
    return `
        <div class="card">
        <div class="card-header">${timeZone}</div>
        <div class="card-body">
            <span class="badge bg-primary">${new Date().toLocaleTimeString('en-US', { timeZone })}</span>
        </div>
        </div>
`
}


setInterval(() => {
    clock1Ele.innerHTML = Clock({ timeZone: 'Asia/Kolkata' })
    clock2Ele.innerHTML = Clock({ timeZone: 'Asia/Dubai' })
    clock3Ele.innerHTML = Clock({ timeZone: 'America/New_york' })
}, 1000);