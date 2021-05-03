

// react component
function Clock(props) {
    let { timeZone } = props; // de-structuring
    return (
        <div className="card">
            <div className="card-header">{timeZone}</div>
            <div className="card-body">
                <span className="badge bg-primary">{new Date().toLocaleTimeString('en-US', { timeZone })}</span>
            </div>
        </div>
    )
}


function Wall() {
    return (
        <div className="row">
            <div className="col-4" id="clock-1">
                <Clock timeZone="Asia/Kolkata" />
            </div>
            <div className="col-4" id="clock-2">
                <Clock timeZone="Asia/Dubai" />
            </div>
            <div className="col-4" id="clock-3">
                <Clock timeZone="America/New_york" />
            </div>
        </div>
    )
}

setInterval(() => {
    ReactDOM.render(<Wall />, document.getElementById('root'))
}, 1000);