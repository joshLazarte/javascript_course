class Weather {
    constructor(city) {
        this.apiKey = '96c67534a578974a6fe45d3d13f3b0ba';
        this.city = city;
    }
    //fetch weather from api
    async getWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},US&APPID=${this.apiKey}&units=imperial`);
        
        //const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=corpus%20christi,US&APPID=96c67534a578974a6fe45d3d13f3b0ba');
        
        
        const responseData = await response.json();
        
        return responseData;
    }
    
    //Change location
    changeLocation(city){
        this.city = city;
    }
}


