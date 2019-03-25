class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewPoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }
    
    paint(weather){
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description.toUpperCase();
        this.string.innerHTML = weather.main.temp + '&#176;F'
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.feelsLike.textContent = `Pressure: ${weather.main.pressure}mb`;
        let minutes = new Date(1000*weather.sys.sunrise).getMinutes();
        if(minutes< 10){
            minutes = '0' + minutes;
        }
        this.dewPoint.textContent = `Sunrise: ${new Date(1000*weather.sys.sunrise).getHours()}:${minutes} AM EST`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed}mph`;
    }
}