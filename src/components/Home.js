import React from 'react'
import arrow from "../assets/arrow.png"
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
export default function Home() {
    return (

        <div>
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6 col-12">
                            <p className="first brand3 text-start">We provide <u style={{ color: "#6D34CB" }}>drivers</u> on-demand</p>
                            <p className="brand4 text-start">We are a group of dedicated individuals from different background with a common interest of using technology to solve problems. </p>
                            <p className="brand2 text-start">connect with us today</p>
                            <div className='text-start socials'>
                                <a href="https://twitter.com/GDGSiliguri"><BsTwitter className='icons' /></a>
                                <a href="https://www.linkedin.com/company/gdg-siliguri/"><BsLinkedin className='icons' /></a>
                                <a href="https://www.facebook.com/GDGSiliguri"><BsFacebook className='icons' /></a>
                            </div>
                        </div>
                        <div className="second col-lg-5 col-12  text-start">
                            <p className='brand5 mt-5'>What are you looking for?</p>
                            <div className='button'>
                                <button type="button" className="btns">Driver</button>
                                <p className='brand2' style={{ marginTop: "8px" }}><u>Register as a driver</u></p>
                            </div>
                            <br />
                            <div className='button'>
                                <img className='arrow' alt='' src={arrow} />
                                <p className='mt-4 arrowText'>
                                    coming soon near your city
                                </p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <img src={monuments} className="monuments-img"></img> */}
        </div>
    )
}
