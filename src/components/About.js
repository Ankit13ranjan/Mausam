import React from 'react'
import "./css/style.css"
import earthlogo from "./images/earth.jpeg"
import selfImage from "./images/Self.jpg"


export default function About() {
  return (
    <div>
        <div className="container1">
            <p className="fs-3">Mausam</p>
            <div className="row">
              <div className="col-md-8">
              <p className="mt-5">Mausam is a Weather App which gives Weather Details about Different Places. <br /> It Shows Results in the form of Temp, Wind, Weather, Humidity, etc.</p>
            <p>This Weather App using OpenWeather.com to fetch Data using API <br />
            Providing Data Globally &nbsp; <img className="imageWidth1" src={earthlogo} alt="" /></p>
            <p>Access Code from <a className="removeUnderline" href="https://github.com/Ankit13ranjan/Mausam">Here.</a></p>
              </div>
              <div className="col-md-4">
                <img className="imageSizeSelf" src={selfImage} alt="" />
              </div>

            </div>
            
            <p className="mTop1 text-center text-secondary">Developed By Ankit Ranjan © 2022 | <a className="removeUnderline text-secondary" href="https://github.com/Ankit13ranjan"> GitHub</a></p>
        </div>

    </div>
  )
}
