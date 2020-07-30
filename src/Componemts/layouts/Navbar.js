import React from 'react'
import {Link } from "react-router-dom";
const  Navbar = ()=> {
        return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid mx-3 mx-lg-5">
        <Link className="nav-link" to="/" className="navbar-brand" href="#"><i className="fab fa-github"></i>  Github Finder</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about" >About</Link>
            </li>
            </ul>
        </div>
        </div>
        </nav>
        )
}
export default Navbar
