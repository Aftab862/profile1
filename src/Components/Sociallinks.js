import React from 'react'
import { GrFacebookOption } from 'react-icons/gr'
import { TbBrandTiktok } from 'react-icons/tb';
import { FaWhatsapp } from 'react-icons/fa'
import {FaTelegramPlane} from 'react-icons/fa'
import {RiTwitterLine} from 'react-icons/ri'
import {MdOutlineLocationOn} from 'react-icons/md'
import {IoLogoInstagram} from 'react-icons/io'
import {BiPhoneCall} from 'react-icons/bi'
import {RiMessengerLine} from 'react-icons/ri'
const Sociallinks = ({ link }) => {

    if (link) {
        console.log(link)
    }
    return (
        <div>
            <div className='links'>

                {
                    link.name === "Twitter" ? (
                        <a href={link.value}>
                            <RiTwitterLine
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    color: "white",
                                    display:"flex",
                                    padding:"4px",

                                }} />
                        </a>
                    ) : null
                }


            </div>
            <div className='links'>
                {
                    link.name === "Tiktok" ? (
                        <a href={link.value}>
                            <TbBrandTiktok
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    color: "white",
                                    display:"flex",
                                    padding:"4px",

                                }} />
                        </a>
                    ) : null
                }

            </div>


            <div className='links'>
                {
                    link.name === "Whatsapp" ? (
                        <a href={link.value}>
                            <FaWhatsapp
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    color: "white",
                                    display:"flex",
                                    padding:"4px",
                                }} />
                        </a>
                    ) : null
                }
            </div>




            <div className='links'>
                {
                    link.name === "Telegram" ? (
                        <a href={link.value}>
                            <FaTelegramPlane
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    color: "white",
                                    display:"flex",
                                    padding:"4px",

                                }} />
                        </a>
                    ) : null
                }
            </div>


            <div className='links'>
                {
                    link.name === "Facebook" ? (
                        <a href={link.value}>
                            <GrFacebookOption
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    color: "white",
                                    display:"flex",
                                    padding:"4px",

                                }} />
                        </a>
                    ) : null
                }
            </div>


            <div className='links'>
                {
                    link.name === "Maps" ? (
                        <a href={link.value}>
                            <MdOutlineLocationOn
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    color: "white",
                                    display:"flex",
                                    padding:"4px",

                                }} />
                        </a>
                    ) : null
                }
            </div>


            <div className='links'>
                {
                    link.name === "Instagram" ? (
                        <a href={link.value}>
                            <IoLogoInstagram
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    color: "white",
                                    display:"flex",
                                    padding:"4px",

                                }} />
                        </a>
                    ) : null
                }
            </div>


            <div className='links'>
                {
                    link.name === "Phone" ? (
                        <a href={link.value}>
                            <BiPhoneCall
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    color: "white",
                                    display:"flex",
                                    padding:"4px",

                                }} />
                        </a>
                    ) : null
                }
            </div>

            <div className='links'>
                {
                    link.name === "Messenger" ? (
                        <a href={link.value}>
                            <RiMessengerLine
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    color: "white",
                                    display:"flex",
                                    padding:"4px",
                                }} />
                        </a>
                    ) : null
                }
            </div>

        </div >
    )
}

export default Sociallinks