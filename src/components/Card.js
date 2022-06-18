import React from "react"

export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <img className="card--image" src={require("../images/mtFuji.png")} />
            <div className="card--info">
                <div className="card--location">
                    <img src={require("../images/locationIcon.png")} alt="location icon"/>
                    <p className="card--location-name">JAPAN</p>
                    <p className="card--location-google">View on Google Maps</p>
                </div>
                <h3 className="card--info-title">Mount Fuji</h3>
                <p className="card--info-dates">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="card--info-desc">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    )
}