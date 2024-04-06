import React, { useState } from 'react'
import './weatherapp.css'
import searchI from '../Assets/search.png'
import clearI from '../Assets/clear.png'
import cloudI from '../Assets/cloud.png'
import drizzleI from '../Assets/drizzle.png'
import rainI from '../Assets/rain.png'
import snowI from '../Assets/snow.png'
import windI from '../Assets/wind.png'
import humidityI from '../Assets/humidity.png'
// import ".env"
const WeatherApp = () => {

    // const apiKey =import.meta.env.VITE_API_KEY;
    const [Wicon, setWicon] = useState(cloudI)
 
 const Search= async()=>{
    const element=document.getElementsByClassName("cityInp");
    if (element[0].value==="") {
        return 0;
    }
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;

    let response= await fetch(url);
    let data= await response.json();

    const humidity=document.getElementsByClassName("humidityPercent");
    const wind=document.getElementsByClassName("windRate");

const temprature=document.getElementsByClassName("weatherTemp");
const location=document.getElementsByClassName("weatherLocation");

humidity[0].innerHTML=data.main.humidity+" %";
wind[0].innerHTML=Math.floor(data.wind.speed)+" Km/h";
temprature[0].innerHTML=Math.floor(data.main.temp)+" \u00B0C";
location[0].innerHTML=data.name

if (data.weather[0].icon==="01d" || data.weather[0].icon==="01n" ) {
    setWicon(clearI)
}else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
setWicon(cloudI)
}
else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
    setWicon(drizzleI)
}
else if(data.weather[0].icon==="04d" || data.weather[0].icon==="05n"){
    setWicon(drizzleI)
}
else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
    setWicon(rainI)
}
else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
    setWicon(rainI)
}
else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
    setWicon(snowI)
    }
    else{
        setWicon(clearI)
    }
}

  return (
    <div className='container'>
        <div className="topBar">
            <input type="text"  className='cityInp' placeholder='Search'/>
            <div className="searchIcon" onClick={()=>{Search()}}>
                <img src={searchI} alt="" />
            </div>
        </div>
      <div className="weatherImg">
        <img src={Wicon} alt="" />
      </div>
<div className="weatherTemp">7°C</div>
<div className="weatherLocation">London</div>
<div className="dataContainer">
    <div className="element">
        <img src={humidityI} alt="" className='icon'/>
        <div className="data">
            <div className="humidityPercent">64%</div>
            <div className="text">Humidity</div>
        </div>
    </div>
    <div className="element">
        <img src={windI} alt="" className='icon'/>
        <div className="data">
            <div className="windRate">18km/h</div>
            <div className="text">wind speed</div>
        </div>
    </div>
</div>
     </div>
  )
}

export default WeatherApp