import React from 'react'
import logo from "../assets/logo.png"
import { HiMenu } from "react-icons/hi";
export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid container">
                <div>
                    <img src={logo} id="navbar-logo" alt="" className="me-3 my-4 logo" />
                    <text className='brand'>FindMyDriver</text>

                </div>
                <button className="navbar-toggler text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <HiMenu className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end navbarItem">
                        <li className="nav-item nav1">
                            Home
                        </li>
                        <li className="nav-item nav1">
                            <u>what we do?</u>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
