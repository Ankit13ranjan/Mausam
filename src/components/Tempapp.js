import React from 'react'
import "./css/style.css"
import sviewImage from "./images/sv.svg"
import swindImage from "./images/wind.svg"
import stempImage from "./images/temperature.svg"
import slogoImage from "./images/logo.jpeg"
import { useState , useEffect } from "react"

export default function Tempapp() {

  const [city, setCity] = useState(null);
  const [wind, setWind] = useState(null);
  const [weather, setWeather] = useState([]);

  const [search, setSearch] = useState("Patna");
  
  useEffect(() => {
    const fetchApi = async () =>{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=6e9680135a5623910e9bc408302ab79e`;

      const response = await fetch (url);
      const resJson = await response.json();
      setCity(resJson.main);
      setWind(resJson.wind);
      setWeather(resJson.weather);
    };
  
    fetchApi();
  },[search])
  


  return (
    <>
    <div className="box">
      <div className="inputData my-3">
        <div className="container col-8">
        <input type="search" className="form-control" value={search} onChange={(event) =>{
          setSearch(event.target.value)}}
          placeholder="Place"  />

        </div>

      </div>

    
    
      {!city ? (
        <p className="text-center mt-5">Data Not Found</p>
        
      ):(
        <div className="information">
          
          <p className="text-end mT mR"><span className="fs-5"><b> Pressure : </b> </span> {city.pressure}</p>
          <p className="text-end mR"><span className="fs-5"><b> Weather : </b></span>  {weather[0].main}</p>
            <h2 className="text-start mL">
            {search} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <img className="imageWidth" src={sviewImage} alt="" />
            </h2>
            <h1 className="my-3 text-start mL">{city.temp} °C  &nbsp;  <img className="imageWidth1" src={stempImage} alt="" /></h1>
            
            
            <p className="text-start mL">Wind Speed : {wind.speed} &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; <img className="imageWidth1" src={swindImage} alt="" /></p>
            <p className="text-start mL">Min : {city.temp_min} °C | Max : {city.temp_max} °C
            <span className="d-flex justify-content-end"><img className="imageWidth rounded-circle" src={slogoImage} alt="" /></span>
            </p>
            
      </div>
      )}


      
    </div>
    </>
  )
}
