let weather={
    "apikey":"d90dac7b627d883e37d1c15ffe574026",
    fetchWeather:function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+ this.apikey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather:function(data){
    const {name}=data;
    const {description,icon}=data.weather[0];
    const {temp,humidity}=data.main;
    const {speed}=data.wind;
    console.log(name,description,icon,temp,humidity,speed);
    document.querySelector(".city").innerText = name;
    document.querySelector(".temp").innerText = (temp-272.15).toPrecision(2)+"°C";


    document.querySelector(".details").innerText = description;
    document.querySelector(".humidity").innerText = "Humidity: "+humidity+"%";
    document.querySelector(".wind").innerText ="Wind speed: "+ speed+"km/h";
    },
    search:function(){
       this.fetchWeather( document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
})
