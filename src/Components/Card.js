import React from 'react'
import { FiPhone } from 'react-icons/fi'
import { GiSmartphone } from 'react-icons/gi'
import { AiOutlineMail } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { FaWhatsapp } from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa'
import { GrFacebookOption } from 'react-icons/gr'
import { AiOutlineYoutube } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import { FaPinterestP } from 'react-icons/fa'
const Card = () => {
    return (

        <div className='card' >

            <div >
                <img className="backimg" src="cover.jpg" alt="" />
            </div>
            <div >
                <img className="profile" src="images.jpeg" alt="" />
            </div>

            <div className="container">
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",

                    marginTop: "70px",
                    lineHeight: "20px"

                }}>
                    <span>Richard Dawson</span>
                    <p>REALTOR</p>
                </div>

                <div className='logo'>
                    <img width={100} src="logo.png" alt="" />
                </div>
            </div>

            <div className="contacts">
                <div className='links'>
                    <FiPhone style={{
                        width: "20px",
                        height: "20px",
                        color: "white",
                        display: "flex",
                        padding: "4px",
                    }} />
                </div>
                <div style={{ textAlign: "start", color: "black" }}>
                    <h5>(555) 123 456789</h5>
                </div>
                <div className='links'>
                    <GiSmartphone style={{
                        width: "20px",
                        height: "20px",
                        color: "white",
                        display: "flex",
                        padding: "4px",
                    }} />
                </div>
                <div style={{ textAlign: "start", color: "black" }}>
                    <h5>(555) 123 456789</h5>
                </div>
                <div className='links'>
                    <AiOutlineMail style={{
                        width: "20px",
                        height: "20px",
                        color: "white",
                        display: "flex",
                        padding: "4px",
                    }} />
                </div>
                <div style={{ textAlign: "start", color: "black" }}>
                    <h5>Example@gmail.com</h5>
                </div>


                <div className='links'>
                    <GoLocation style={{
                        width: "20px",
                        height: "20px",
                        color: "white",
                        display: "flex",
                        padding: "4px",
                    }} />
                </div>
                <div style={{ textAlign: "start", color: "black" }}>
                    <h5>Main Street Your City</h5>
                </div>
            </div>

            <hr className='bookends-dots' />
            <div >
                <div className='footer'>
                    <h6 >Connect with me </h6>
                </div>
                <div className="footer">

                    <div className='links'>
                        <GrFacebookOption style={{
                            width: "20px",
                            height: "20px",
                            color: "white",
                            display: "flex",
                            padding: "4px",
                        }} />
                    </div>

                    <div className='links'>
                        <FaTelegramPlane style={{
                            width: "20px",
                            height: "20px",
                            color: "white",
                            display: "flex",
                            padding: "4px",
                        }} />
                    </div>


                    <div className='links'>
                        <AiOutlineYoutube style={{
                            width: "20px",
                            height: "20px",
                            color: "white",
                            display: "flex",
                            padding: "4px",
                        }} />
                    </div>


                    <div className='links'>
                        <FiTwitter style={{
                            width: "20px",
                            height: "20px",
                            color: "white",
                            display: "flex",
                            padding: "4px",
                        }} />
                    </div>




                    <div className='links'>
                        <FaPinterestP style={{
                            width: "20px",
                            height: "20px",
                            color: "white",
                            display: "flex",
                            padding: "4px",
                        }} />
                    </div>


                    <div className='links'>
                        <FaWhatsapp style={{
                            width: "20px",
                            height: "20px",
                            color: "white",
                            display: "flex",
                            padding: "4px",
                        }} />
                    </div>
                </div>

            </div>
        </div >
    )
}
export default Card
