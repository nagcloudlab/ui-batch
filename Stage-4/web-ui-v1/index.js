


const clock1Ele = document.getElementById('clock-1');
const clock2Ele = document.getElementById('clock-2');
const clock3Ele = document.getElementById('clock-3');


setInterval(() => {
    clock1Ele.innerHTML = `
    <div class="card">
        <div class="card-header">Asia/Kolkata</div>
        <div class="card-body">
            <span class="badge bg-primary">${new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })}</span>
        </div>
    </div>
    `
    clock2Ele.innerHTML = `
    <div class="card">
        <div class="card-header">Asia/Dubai</div>
        <div class="card-body">
            <span class="badge bg-primary">${new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Dubai' })}</span>
        </div>
    </div>
    `
    clock3Ele.innerHTML = `
    <div class="card">
        <div class="card-header">America/New_york</div>
        <div class="card-body">
            <span class="badge bg-primary">${new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_york' })}</span>
        </div>
    </div>
    `
}, 1000);