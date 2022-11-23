import React from "react"


export default function Travel(props){
    return (
        <section className = "travel-section">
            <img src = {props.imageUrl} className ="travel--photo" />
            <div className = "travel--description">
                <div className ="travel--location">
                    <i class="fa-regular fa-location-pin"></i>
                    <p className ="travel--country">{props.location}</p>
                    <a href ={props.googleMapsUrl} className="travel--address">View on Google Maps</a>
                </div>
            <h1 className = "travel--title">{props.title}</h1>
            <span className="travel--date">{props.startDate} -</span> <span className="travel--date">{props.endDate}</span>
            <p className = "travel--description">{props.description}</p>
            </div>
        </section>
    )
}