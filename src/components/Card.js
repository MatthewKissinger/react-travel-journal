import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img className="card--image" src={require(`../images/${props.item.imageUrl}`)} alt={props.item.imageUrl}/>
            <div className="card--info">
                <div className="card--location">
                    <img src={require("../images/locationIcon.png")} alt="location icon"/>
                    <p className="card--location-name">{(props.item.location).toUpperCase()}</p>
                    <p className="card--location-google">View on Google Maps</p>
                </div>
                <h3 className="card--info-title">{props.item.title}</h3>
                <p className="card--info-dates">{props.item.startDate} - {props.item.endDate}</p>
                <p className="card--info-desc">{props.item.description}</p>
            </div>
        </div>
    )
}