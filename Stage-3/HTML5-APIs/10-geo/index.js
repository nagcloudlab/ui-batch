
let x = document.getElementById('demo')

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError)
} else {
    x.innerHTML = "geolocation not supported by browser"
}


function showPosition(position) {
    console.log(position);
    const key = "<fillyourapikey>";
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${key}`

  // axios
    fetch(url)
        .then(response => response.json())
        .then(weather => {
            console.log(weather)
        })

}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}