import React from "react"
import data from "./data"
import Navbar from "./Navbar"
import Travel from "./Travel"


export default function App(){
    const travelItems = data.map(item => {
        return (
            <Travel 
                title = {item.title}
                location = {item.location}
                googleMapsUrl = {item.googleMapsUrl}
                startDate = {item.startDate}
                endDate = {item.endDate}
                description = {item.description}
                imageUrl = {item.imageUrl}
            />
        )
    })
    return (
        <div>
            <Navbar />
            {travelItems}
            
        </div>
    )
}