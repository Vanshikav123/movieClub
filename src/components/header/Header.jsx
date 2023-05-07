import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import "./logo.png" 

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><span className="header__icon" style={{fontFamily:"fantasy",fontSize:40}} >movieClub</span></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
            </div>
        </div>
    )
}

export default Header