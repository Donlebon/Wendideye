import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useHistory } from "react-router-dom";

export default function Navbar(){

    const [query, setQuery] = useState("")

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/search?q=${query}`)
    }

    return (
    <div className = "nav-container">
        <Link to = "/Wendideye/" >
            <h1 className = "title">Item Trackerss</h1>
        </Link>
        <form onSubmit = {handleSubmit} className = "search-container">
            <input onChange = {(e) => setQuery(e.target.value)} className = "search" type = "text" placeholder = "Search for an Item"></input>
        </form>
        <Link to = "/create" >
            <button className = "add">Add</button>
        </Link>
    </div>
    )
}
