import React from "react"
import {data} from "./data"
import Navbar from "./components/Navbar"
import Card from "./components/Card"



export default function App() {
    const card = data.map(item => {
        return (<Card 
            key={item.title}
            item={item}
        />)
    })

    return (
        <div>
            <Navbar />
            <section className="card--list">
                {card}
            </section>
            
        </div>
    )
}