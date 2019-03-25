//init LS
const storage = new Storage();
//get stored loc data
const weatherLocation = storage.getLocationData();
//init weather object
const weather = new Weather(weatherLocation.city);
//init ui
const ui = new UI;
//get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather);

//change location
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    weather.changeLocation(city);
    
    //set LS
    storage.setLocationData(city);
    
    getWeather();
    
    //close modal
    $('#locModal').modal('hide');
})



function getWeather(){
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}
