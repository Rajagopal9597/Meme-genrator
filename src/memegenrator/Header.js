import React from "react"
import image from "../images/meme.jpg"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={image}
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            
        </header>
    )
}