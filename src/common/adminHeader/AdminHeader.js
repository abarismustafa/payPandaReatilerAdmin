
import { useState } from 'react'
import logo from '../../asesets/logo/PayPanda_logo_Final-09-e1670775011263.png'
import { SiPaytm } from "react-icons/si";
import { Link } from 'react-router-dom';


function AdminHeader({ handleClick }) {
    const [loadwallet, setLoadWallet] = useState(false)


    return (
        <>
            <header className="HeaderMain">
                <div className="logo">
                    <a href="#">
                        <img src={logo} alt="" />
                        {/* <svg x="0px" y="0px" viewBox="0 0 350 128.4">
                            <path fill="#FFFFFF" d="M25.6,38.2c0,2,0.2,3.2,0.8,4c-0.6,0-1.2,0-1.7,0c-2.9,0.1-10.3,4.4-13,6.1c-2.9,2-8.6,7.1-8.6,10.3v3.2 c0.4,1.2,6.6,6.6,7.9,7.8l12.4,11.8h2.2c0,0.6,0,1.1,0,1.8l3,3.1h13.9l3.1-4.8h0.6c1.4,3.3,1.8,4.8,8.4,4.8c1.6,0,2.7-2,3.8-4.8H60 c0.3,1.8,2.2,3.5,3.1,4.8h15.7l3.6-2.4c4.5,3.1,9.1,4.5,15.1,2.3c4.1-1.5,0.7-0.9,4.5,0.4c2.3,0.8,3.7,0.7,5.2,0.4 c2.8-0.5,3.4-1.7,5.1-2.1c1.1-0.2,12.8,5.7,19.5,0.1l3.3-3.5h4.1c4.8,9.7,13.1,6.1,19.3,0.5c10.5,7.1,17,5.9,24.7,1.2l3.6,3.1h15.1 l2.8-2.8V99c0.1,5.6,2.5,7.3,6.6,6.4c1.2-0.3,7.4-3.7,11.9-6.4c10.2,15.8,27.9,26.3,47.9,26.3c31.5,0,57.1-25.8,57.1-57.7 S302.8,9.8,271.3,9.8c-18.5,0-35.1,9-45.5,22.8l-7.2-5.9c-5-3.5-11.5-0.2-11.9,4.5l-0.8,12.2c-35.5-0.1-70.7-0.2-106.1-0.3 c-6.1,0-12.3,0-18.3-0.1c2.9-4.4-0.4-9-3.8-9.6h-13c-2.9,0.7-4.2,3-6.3,9.4c-2.8,0-5.6,0-8.4,0v-0.1l-6.6-9.2H30.5 C27.6,33.8,25.6,35,25.6,38.2z M45.7,105l-0.2-0.1l1.5-2.2l0.2,0.1c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1,0,0.1c0,0.3,0.4,0.7,1.3,1.1 c0.9,0.4,1.8,0.7,2.8,0.7c1.1,0,1.8-0.2,2.5-0.6c0.7-0.3,1-0.9,1-1.4c0-0.5-0.2-0.9-0.8-1.1c-0.5-0.2-1.4-0.3-2.7-0.3 c-1.8,0-3.1-0.3-3.8-0.8s-1.1-1.1-1.1-2.1s0.4-1.7,1.4-2.4c1-0.7,2.2-1,3.6-1c1,0,2.1,0.2,3.4,0.8c0.3,0.1,0.6,0.2,0.6,0.2 s0.1,0,0.2-0.1c0.1,0,0.1-0.1,0.2-0.2l0.2,0.1l-1.3,2.4l-0.2-0.1c0,0,0,0,0-0.1v-0.1c0-0.3-0.3-0.7-1.1-1c-0.7-0.3-1.5-0.4-2.4-0.4 c-1,0-1.7,0.2-2.4,0.5c-0.4,0.3-0.8,0.8-0.8,1.2c0,0.8,1,1.2,3,1.3c0.4,0,0.8,0,1,0c1.5,0.1,2.6,0.3,3.4,0.9c0.7,0.4,1,1.2,1,2.1 c0,1-0.5,1.9-1.5,2.5c-1,0.7-2.3,1-3.8,1c-1.4,0-2.9-0.4-4.3-1.3c-0.3-0.2-0.5-0.3-0.5-0.3h-0.1C45.8,104.8,45.8,104.9,45.7,105 L45.7,105z M61.6,102.6H65L63.2,99L61.6,102.6L61.6,102.6z M62,98.6C62,98.5,62,98.5,62,98.6c0.1-0.3,0.2-0.4,0.2-0.6 c0-0.1,0-0.1-0.1-0.2c0-0.1-0.1-0.1-0.2-0.1v-0.3h2.8v0.2c-0.1,0-0.1,0.1-0.2,0.1c0,0.1-0.1,0.1-0.1,0.2c0,0.1,0,0.2,0.1,0.4 c0,0,0,0,0,0.1l2.9,6.5c0.1,0.2,0.2,0.4,0.4,0.7c0.1,0.1,0.3,0.3,0.5,0.3v0.2h-2.6v-0.2c0.1,0,0.2-0.1,0.2-0.1s0.1-0.1,0.1-0.2 c0-0.1,0-0.1,0-0.2c0-0.1-0.1-0.2-0.1-0.3l-0.4-1.1h-4.4l-0.5,1.1c0,0.1-0.1,0.2-0.1,0.2c0,0.1,0,0.2,0,0.3c0,0.1,0,0.1,0,0.2 c0,0,0.1,0.1,0.2,0.1v0.2h-2.4v-0.2c0.2-0.1,0.3-0.2,0.4-0.3c0.1-0.1,0.2-0.3,0.3-0.5L62,98.6L62,98.6z M75.2,105 c0,0.1-0.1,0.2-0.1,0.2c0,0.1,0,0.1,0,0.2c0,0.1,0,0.2,0.1,0.3c0.1,0.1,0.2,0.1,0.3,0.1v0.2h-3.3v-0.2c0.1,0,0.2-0.1,0.3-0.1 c0.1-0.1,0.1-0.2,0.1-0.3c0,0,0-0.1,0-0.2c0-0.1,0-0.1-0.1-0.2l-2.9-6.6c-0.1-0.2-0.2-0.4-0.3-0.5c-0.1-0.1-0.3-0.2-0.4-0.3v-0.2 h2.8v0.2c-0.1,0-0.2,0.1-0.3,0.2c-0.1,0.1-0.1,0.2-0.1,0.3v0.1c0,0,0,0.1,0.1,0.2l2.6,5.8l2.4-5.8c0-0.1,0.1-0.1,0.1-0.2 c0-0.1,0-0.1,0-0.2c0-0.1,0-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.2v-0.1h2.8v0.2c-0.2,0.1-0.3,0.2-0.4,0.3c-0.1,0.1-0.2,0.3-0.3,0.5 L75.2,105L75.2,105z M81.1,106.1v-0.2c0.2,0,0.3-0.1,0.3-0.2c0.1-0.1,0.1-0.2,0.1-0.4v-7.1c0-0.2,0-0.3-0.1-0.4 c-0.1-0.1-0.2-0.1-0.3-0.2v-0.1h7c0.2,0,0.3,0,0.4-0.1c0.1-0.1,0.1-0.2,0.2-0.4h0.2v2.3h-0.2c-0.1-0.2-0.1-0.3-0.2-0.4 c-0.1-0.1-0.2-0.1-0.4-0.1h-5v2.3h3.2c0.2,0,0.3,0,0.4-0.1c0.1-0.1,0.2-0.2,0.2-0.3h0.2v2.4H87c-0.1-0.2-0.1-0.3-0.2-0.3 c-0.1-0.1-0.2-0.1-0.4-0.1h-3.3v2.4h5.3c0.2,0,0.3,0,0.4-0.1c0.1-0.1,0.1-0.2,0.2-0.3h0.2v2.3h-0.2c-0.1-0.2-0.1-0.3-0.2-0.3 c-0.1-0.1-0.2-0.1-0.4-0.1L81.1,106.1L81.1,106.1z M101.5,106.1v-0.2c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.1-0.2,0.1-0.4v-3.5l-3.5-4.8 c-0.2-0.3-0.4-0.6-0.7-0.8c-0.2-0.2-0.4-0.3-0.7-0.4v-0.2h3v0.2c-0.1,0-0.2,0.1-0.2,0.1S100,96,100,96.1c0,0.1,0,0.1,0.1,0.2 c0,0.1,0.1,0.2,0.2,0.3l2.7,3.7l2.7-3.7c0.1-0.1,0.1-0.2,0.2-0.3c0-0.1,0.1-0.2,0.1-0.2c0-0.1,0-0.1-0.1-0.2c0,0-0.1-0.1-0.2-0.1 v-0.2h3v0.2c-0.2,0.1-0.4,0.2-0.7,0.4c-0.2,0.2-0.4,0.4-0.7,0.8l-3.8,4.8v3.6c0,0.2,0,0.3,0.1,0.4c0.1,0.1,0.2,0.1,0.4,0.2v0.1 H101.5L101.5,106.1z M113.7,106.4c1.5,0,2.7-0.4,3.6-1.3c1-0.9,1.4-2,1.4-3.3c0-1.3-0.4-2.4-1.4-3.3s-2.2-1.3-3.6-1.3 c-1.5,0-2.7,0.4-3.6,1.3c-1,0.9-1.4,2-1.4,3.3c0,1.3,0.4,2.4,1.4,3.3C111.1,105.9,112.3,106.4,113.7,106.4L113.7,106.4z M110.3,101.8c0-1,0.3-1.9,1-2.4c0.6-0.7,1.4-0.9,2.5-0.9c1.1,0,1.8,0.3,2.5,0.9c0.7,0.7,1,1.4,1,2.4s-0.3,1.9-1,2.4 c-0.7,0.7-1.4,1-2.5,1c-1.1,0-1.8-0.3-2.5-1C110.6,103.6,110.3,102.7,110.3,101.8L110.3,101.8z M122,102.9v-4.6 c0-0.2,0-0.3-0.1-0.4c-0.1-0.1-0.2-0.1-0.3-0.2v-0.2h2.5v0.2c-0.2,0-0.3,0.1-0.3,0.2c-0.1,0.1-0.1,0.2-0.1,0.4v4.6 c0,0.8,0.2,1.3,0.7,1.7c0.4,0.3,1.1,0.6,1.9,0.6c0.9,0,1.6-0.2,2.1-0.6c0.4-0.3,0.7-0.9,0.7-1.7v-4.6c0-0.2,0-0.3-0.1-0.4 c-0.1-0.1-0.2-0.1-0.4-0.2v-0.2h2.5v0.2c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.1,0.2-0.1,0.4v4.6c0,1.2-0.3,2.1-1,2.6 c-0.7,0.5-1.7,0.8-3.3,0.8c-1.5,0-2.6-0.2-3.3-0.8C122.3,105,122,104.2,122,102.9L122,102.9z M139.5,97.4c1.2,0,2.1,0.2,2.7,0.7 s1,1.1,1,1.9c0,0.7-0.2,1.1-0.5,1.5c-0.3,0.4-0.9,0.7-1.5,0.8l1.8,3c0.2,0.3,0.3,0.4,0.4,0.5c0.1,0.1,0.2,0.2,0.4,0.2v0.2h-2.5 v-0.2h0.1c0.1,0,0.1,0,0.2-0.1l0.1-0.1v-0.1v-0.1l-2.1-3.2h-2.9v3c0,0.2,0,0.3,0.1,0.4c0.1,0.1,0.2,0.1,0.3,0.2v0.2h-2.5v-0.2 c0.2,0,0.3-0.1,0.3-0.2c0.1-0.1,0.1-0.2,0.1-0.4v-7.1c0-0.2,0-0.3-0.1-0.4c-0.1-0.1-0.2-0.1-0.3-0.2v-0.1H139.5L139.5,97.4z M140,98.8h-3.5v2.3h3.5c0.6,0,1-0.1,1.3-0.3c0.2-0.2,0.4-0.4,0.4-0.9c0-0.3-0.1-0.7-0.4-0.9C141,98.9,140.6,98.8,140,98.8 L140,98.8z M155.6,106.1v-0.2c0.2,0,0.3-0.1,0.3-0.2c0.1-0.1,0.1-0.2,0.1-0.4v-8.5h-3.4c-0.2,0-0.3,0-0.4,0.1 c-0.1,0.1-0.1,0.2-0.2,0.3h-0.2v-2.3h0.2c0.1,0.2,0.1,0.3,0.2,0.4c0.1,0.1,0.2,0.1,0.4,0.1h8.6c0.2,0,0.3,0,0.4-0.1 c0.1-0.1,0.1-0.2,0.2-0.4h0.2v2.3l-0.2,0c0-0.2-0.1-0.3-0.2-0.3c-0.1-0.1-0.2-0.1-0.4-0.1h-3.5v8.5c0,0.2,0,0.3,0.1,0.4 c0.1,0.1,0.2,0.1,0.3,0.2v0.2H155.6L155.6,106.1z M166.1,105.4c0,0.2,0,0.3,0.1,0.4c0.1,0.1,0.2,0.1,0.3,0.2v0.1h-2.5v-0.2 c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.1-0.2,0.1-0.4v-7.1c0-0.2,0-0.3-0.1-0.4c-0.1-0.1-0.2-0.1-0.4-0.2v-0.1h2.5v0.2 c-0.2,0-0.3,0.1-0.3,0.2c-0.1,0.1-0.1,0.2-0.1,0.4V105.4L166.1,105.4z M171.9,105.4c0,0.2,0,0.3,0.1,0.4c0.1,0.1,0.2,0.1,0.3,0.2 v0.1h-2.2v-0.2c0.2,0,0.3-0.1,0.3-0.2c0.1-0.1,0.1-0.2,0.1-0.4v-7.1c0-0.2,0-0.3-0.1-0.4c-0.1-0.1-0.2-0.1-0.3-0.2v-0.1h3.3v0.2 c-0.1,0-0.2,0.1-0.3,0.1c-0.1,0.1-0.1,0.1-0.1,0.2V98c0,0,0,0.1,0.1,0.2l2.5,4.6l2.5-4.6c0-0.1,0.1-0.1,0.1-0.2v-0.1 c0-0.1,0-0.2-0.1-0.2c0-0.1-0.1-0.1-0.3-0.1v-0.2h3.5v0.2c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.1,0.2-0.1,0.4v7.1 c0,0.2,0,0.3,0.1,0.4c0.1,0.1,0.2,0.1,0.4,0.2v0.1h-2.5v-0.2c0.2,0,0.3-0.1,0.3-0.2c0.1-0.1,0.1-0.2,0.1-0.4v-6.3l-3.6,6.7 l-3.7-6.7V105.4L171.9,105.4z M184.9,106.1v-0.2c0.2,0,0.3-0.1,0.3-0.2c0.1-0.1,0.1-0.2,0.1-0.4v-7.1c0-0.2,0-0.3-0.1-0.4 c-0.1-0.1-0.2-0.1-0.3-0.2v-0.1h7c0.2,0,0.3,0,0.4-0.1c0.1-0.1,0.1-0.2,0.2-0.4h0.2v2.3h-0.2c-0.1-0.2-0.1-0.3-0.2-0.4 c-0.1-0.1-0.2-0.1-0.4-0.1h-5v2.3h3.1c0.2,0,0.3,0,0.4-0.1c0.1-0.1,0.2-0.2,0.2-0.3h0.2v2.4h-0.2c-0.1-0.2-0.1-0.3-0.2-0.3 c-0.1-0.1-0.2-0.1-0.4-0.1h-3.3v2.4h5.3c0.2,0,0.3,0,0.4-0.1c0.1-0.1,0.1-0.2,0.2-0.3h0.2v2.3h-0.2c-0.1-0.2-0.1-0.3-0.2-0.3 c-0.1-0.1-0.2-0.1-0.4-0.1L184.9,106.1L184.9,106.1z" />
                            <path fill="#575656" d="M25.6,38.2c0,2,0.2,3.2,0.8,4c-0.6,0-1.2,0-1.7,0c-2.9,0.1-10.3,4.4-13,6.1c-2.9,2-8.6,7.1-8.6,10.3v3.2 c0.4,1.2,6.6,6.6,7.9,7.8l12.4,11.8h2.2c0,0.6,0,1.1,0,1.8l3,3.1h13.9l3.1-4.8h0.6c1.4,3.3,1.8,4.8,8.4,4.8c1.6,0,2.7-2,3.8-4.8H60 c0.3,1.8,2.2,3.5,3.1,4.8h15.7l3.6-2.4c4.5,3.1,9.1,4.5,15.1,2.3c4.1-1.5,0.7-0.9,4.5,0.4c2.3,0.8,3.7,0.7,5.2,0.4 c2.8-0.5,3.4-1.7,5.1-2.1c1.1-0.2,12.8,5.7,19.5,0.1l3.3-3.5h4.1c4.8,9.7,13.1,6.1,19.3,0.5c10.5,7.1,17,5.9,24.7,1.2l3.6,3.1h15.1 l2.8-2.8V99c0.1,5.6,2.5,7.3,6.6,6.4c1.2-0.3,7.4-3.7,11.9-6.4c10.2,15.8,27.9,26.3,47.9,26.3c31.5,0,57.1-25.8,57.1-57.7 S302.8,9.8,271.3,9.8c-18.5,0-35.1,9-45.5,22.8l-7.2-5.9c-5-3.5-11.5-0.2-11.9,4.5l-0.8,12.2c-35.5-0.1-70.7-0.2-106.1-0.3 c-6.1,0-12.3,0-18.3-0.1c2.9-4.4-0.4-9-3.8-9.6h-13c-2.9,0.7-4.2,3-6.3,9.4c-2.8,0-5.6,0-8.4,0v-0.1l-6.6-9.2H30.5 C27.6,33.8,25.6,35,25.6,38.2z M22.6,39.5c0-0.4,0-0.8,0-1.3c0-2.6,0.9-4.4,2.4-5.8c1.3-1.2,3-1.7,5-2c0.2,0,0.4-0.1,0.6-0.1h12.8 l0,0c1,0,1.9,0.5,2.5,1.3l5.8,8h4.6c0.8-2.4,1.6-4.1,2.5-5.5c1.4-2.2,3-3.3,5.3-3.8c0.2-0.1,0.5-0.1,0.7-0.1h12.8 c0.3,0,0.5,0,0.8,0.1c1.1,0.2,2.2,0.7,3.2,1.4c1.4,0.9,2.6,2.3,3.3,3.9c0.6,1.3,1,2.8,0.9,4.4c4.4,0,9.3,0,14.1,0v0L203,40.3 l0.6-9.3h0c0,0,0-0.1,0-0.1c0.2-1.6,0.7-3,1.6-4.2c1-1.5,2.5-2.7,4.3-3.5v0v0c1.7-0.8,3.6-1.1,5.6-0.9c1.8,0.2,3.6,0.8,5.3,1.9 c0.1,0.1,0.2,0.1,0.3,0.2l4.7,3.9c5.3-6.3,11.8-11.5,19.3-15.2c8.1-4,17.2-6.3,26.7-6.3c16.6,0,31.6,6.8,42.4,17.8 c10.9,11,17.6,26.3,17.6,43.1s-6.7,32-17.6,43c-10.9,11-25.9,17.8-42.6,17.8c-10.4,0-20.1-2.7-28.7-7.3c-8-4.4-14.9-10.5-20.2-17.9 c-1.8,1-3.8,2.1-5.5,3c-1.8,1-3.3,1.7-4.2,2.1c-0.2,0.1-0.4,0.1-0.6,0.2c-3.1,0.7-5.6,0.3-7.6-1.4c-1.7-1.6-2.7-4-2.8-7.6 c0-0.1,0-0.2,0-0.4v-9.6h-14.8v0c-0.7,0-1.4-0.2-2-0.7l-1.9-1.7c-3.6,2-7.1,3.2-11,3.2c-4,0-8.2-1.3-13.2-4.3 c-1.5,1.2-3.1,2.2-4.7,3c-2.5,1.2-5,1.9-7.6,1.7c-2.7-0.2-5.3-1.4-7.5-3.9c-0.6-0.6-1.1-1.4-1.6-2.2h-1l-2.3,2.5v0 c-0.1,0.1-0.2,0.2-0.3,0.3c-6.6,5.5-16.1,2.4-20.4,1c-0.6-0.2,0.1-0.5-0.5-0.4v0l0,0c-0.3,0.1-0.6,0.2-0.9,0.4 c-1,0.6-2.1,1.2-4.1,1.6l0,0h0c0,0-0.1,0-0.1,0c-0.9,0.1-1.8,0.2-2.9,0.2c-1.1-0.1-2.3-0.3-3.7-0.7c-0.7-0.2-1.3-0.5-1.8-0.7 c-0.2,0.1-0.5,0.2-0.8,0.3l0,0h0c-3.5,1.3-6.7,1.5-9.7,0.9c-2.3-0.4-4.4-1.3-6.4-2.5l-1.9,1.3c-0.5,0.3-1.1,0.5-1.7,0.5H63l0,0 c-1,0-2-0.5-2.6-1.4c-0.2-0.3-0.5-0.6-0.8-1c-0.1-0.2-0.2-0.3-0.4-0.4c-0.1,0.1-0.1,0.2-0.2,0.2c-1.2,1.7-2.6,2.6-4.6,2.6 c-5.2,0-7.5-0.8-9-2.4l-0.5,0.7c-0.5,1-1.5,1.7-2.7,1.7H28.6l0,0c-0.8,0-1.6-0.3-2.2-0.9l-3-3c-0.3-0.3-0.5-0.6-0.7-0.9 c-0.5-0.1-1.1-0.4-1.5-0.8L8.9,71.8h0c-0.2-0.1-0.5-0.5-1-0.9c-2-1.8-5.6-5-7.1-7C0.3,63.4,0,62.6,0,61.8v-3.2 c0-2.1,1.3-4.5,3.1-6.7c2.1-2.5,5-5,6.8-6.2l0,0l0.1,0c1.7-1.1,5.1-3.1,8.3-4.6C19.8,40.4,21.3,39.8,22.6,39.5z M125,65.8c-0.4-0.2-1.1-0.4-1.8-0.8c-2.7-1.1-4-2-4-2.8c0-0.5,0.3-1.1,0.9-1.5c0.6-0.4,1.2-0.6,2.1-0.6 c0.3,0,0.6,0,0.9,0.1c0.3,0.1,0.5,0.2,1,0.3c0.1,1.4,0.4,2.4,1.1,3.1c0.7,0.7,1.6,1,2.8,1c1.1,0,1.8-0.3,2.5-0.9 c0.5-0.7,0.9-1.4,0.9-2.5c0-1.5-0.8-2.7-2.2-3.6c-1.4-1-3.4-1.4-5.6-1.4c-2.9,0-5.3,0.8-7,2.3c-1.7,1.5-2.6,3.5-2.6,6.1 c0,1.9,0.4,3.4,1.4,4.5c1,1.2,2.8,2.4,5.6,3.6c0.8,0.3,1.7,0.7,2.8,1.2c2.3,0.9,3.5,1.9,3.5,2.9c0,0.8-0.4,1.3-1.2,1.9 c-0.9,0.4-2,0.6-3.4,0.6c-0.4,0-0.9,0-1.3-0.1c-0.4-0.1-0.9-0.2-1.4-0.4c0-0.1,0-0.1,0-0.2c0.1-0.5,0.1-0.9,0.1-1.1 c0-1.1-0.3-2-1-2.6c-0.7-0.7-1.6-1-2.8-1c-1.1,0-2,0.3-2.7,1c-0.7,0.7-1,1.5-1,2.6c0,1.9,1,3.3,2.8,4.5c1.8,1.2,4.2,1.7,7.3,1.7 c3.3,0,5.9-0.9,7.8-2.5c1.9-1.6,2.9-3.8,2.9-6.6c0-2-0.5-3.5-1.5-4.7C130.8,68.6,128.6,67.3,125,65.8z M110.6,79.2l-1-1.3c-0.2,0.1-0.4,0.1-0.7,0.2c-0.2,0-0.4,0.1-0.7,0.1c-1,0-1.5-0.2-1.9-0.8 c-0.3-0.4-0.6-1.4-0.6-2.9v-7.3c0-3.5-1.1-6.2-3.1-8.1c-2-1.8-4.8-2.6-8.3-2.7c-0.2,0-0.6,0-0.8,0c-2.6,0-4.7,0.5-6.4,1.6 c-1.7,1.1-2.5,2.4-2.5,3.8c0,1.1,0.3,2,0.9,2.6c0.5,0.7,1.4,1,2.5,1c1.2,0,2-0.4,2.8-1.2c0.8-0.9,1.1-2,1.2-3.4 c0.5-0.1,1-0.2,1.2-0.2c0.2,0,0.5,0,0.8,0c0.1,0,0.3,0,0.4,0c1.1,0.1,2,0.6,2.7,1.4c0.9,1,1.2,2.2,1.2,3.7v0.4 c-1.4,0.1-2.7,0.2-3.9,0.4c-3.3,0.5-5.9,1.4-7.8,2.6c-2.6,1.8-3.9,4.1-3.9,7.1c0,2.3,0.8,4,2.4,5.5c1.6,1.4,3.7,2.1,6.4,2.1 c1,0,2-0.1,2.9-0.3c0.5-0.1,1.1-0.3,1.5-0.6c1.3-0.5,2.5-1.4,3.6-2.7c0.5,1.2,1.3,2.1,2.2,2.6c1,0.5,2.1,0.9,3.4,0.9 c1.4,0,2.8-0.4,3.9-1.2c1.2-0.9,1.7-1.5,1.7-2.3c0-0.2,0-0.4,0-0.6C110.7,79.3,110.7,79.3,110.6,79.2z M98.4,74.2 c0,1.5-0.4,2.7-1.1,3.5c-0.7,0.7-1.6,1.1-2.8,1.2c-0.2,0-0.3,0-0.5,0c-1.1,0-1.8-0.3-2.5-0.9c-0.5-0.6-0.9-1.4-0.9-2.5 c0-1.9,0.7-3.3,2-4.2c0.5-0.4,1.2-0.7,1.9-1c1.1-0.3,2.4-0.5,3.9-0.5V74.2z M208.4,57.4c-0.9-0.9-1.9-1.3-3.4-1.3c-1.4,0-2.7,0.4-4,1.4c-1.3,1-2.4,2.4-3.4,4.3v-0.2 c0.1-1,0.2-1.9,0.2-2.3v-3.2l-10.1,0.7v1.6c0,0.4,0.1,0.8,0.2,1.1c0.1,0.3,0.3,0.5,0.6,0.6l0.7,0.4c0.3,0.2,0.6,0.4,0.8,0.7 c0.1,0.2,0.2,0.8,0.2,1.4v13.8c0,0.8-0.1,1.2-0.2,1.5c-0.1,0.3-0.4,0.5-0.9,0.8l-0.8,0.3c-0.3,0.1-0.5,0.4-0.8,0.8 c-0.2,0.3-0.3,0.8-0.3,1.1v1.6h13.5V81c0-0.4-0.1-0.8-0.3-1.1c-0.2-0.3-0.4-0.6-0.8-0.8l-0.8-0.3c-0.4-0.2-0.7-0.4-0.9-0.8 c-0.1-0.3-0.2-0.8-0.2-1.5v-3.2c0-3,0.2-5.3,0.8-6.9c0.5-1.6,1.4-2.9,2.6-3.9c0.2,0.8,0.8,1.3,1.4,1.8c0.8,0.4,1.5,0.7,2.4,0.7 c1.2,0,2.3-0.4,3.2-1.3s1.3-2,1.3-3.2C209.7,59.4,209.3,58.3,208.4,57.4z M154.9,79.7l-1.1-2.3c-0.7,0.2-1.2,0.3-1.6,0.4c-0.4,0.1-0.9,0.1-1.3,0.1c-1.1,0-1.9-0.3-2.4-0.9 c-0.4-0.5-0.7-1.7-0.7-3.4V61.3h6.5v-4.4h-6.5V46.7l-7.4,1.2v5.6c0,1.1-0.1,2-0.3,2.4c-0.2,0.4-0.5,0.9-1.2,1.1l-0.7,0.3 c-0.3,0.1-0.5,0.3-0.8,0.8c-0.2,0.3-0.3,0.8-0.3,1.1v2.1h2.8v12.9c0,3.2,0.7,5.5,1.8,6.9c1.2,1.4,3.2,2.2,5.7,2.2 c1.8,0,3.6-0.3,5.1-1c1.5-0.7,2.3-1.4,2.3-2.1c0-0.1,0-0.1,0-0.2C155,80,154.9,79.9,154.9,79.7z M171.1,56.2L171.1,56.2c-3.9,0-7.2,1.3-9.7,3.9c-2.6,2.6-3.9,5.8-3.9,9.7c0,4,1.3,7.3,3.9,9.8 c2.5,2.4,5.6,3.6,9.7,3.7c0.2,0,0.4,0,0.6,0c2,0,3.7-0.3,5.1-0.9c1.5-0.5,3.1-1.5,4.7-3.1c0.5-0.5,1.1-1,1.4-1.4 c0.3-0.4,0.5-0.8,0.5-1.1c0-0.1,0-0.3-0.1-0.4c-0.1-0.1-0.1-0.3-0.2-0.3l-2-1.6c-1.2,1.4-2.4,2.4-3.6,3.1c-1.2,0.7-2.6,1-4.3,1 c-0.8,0-1.4-0.1-2.1-0.2c-1.4-0.3-2.5-1-3.4-2.1c-1.3-1.5-1.8-3.7-2-6.6h5.3h12.7v-0.9c0-3.7-1.2-6.8-3.6-9.1 C178,57.4,174.9,56.2,171.1,56.2z M171.1,65.7h-4.8c0.2-1.8,0.8-3.1,1.6-3.9c0.9-0.9,1.8-1.4,3.2-1.4h0.1c1.4,0,2.5,0.4,3.3,1.4 c0.9,1,1.3,2.3,1.4,3.9H171.1z" />
                            <path fill="#D50C2F" d="M28.9,82.8v-2.2c0-0.4,0.1-0.9,0.3-1.2c0.2-0.3,0.5-0.6,0.9-0.7l0.9-0.3c0.5-0.2,0.9-0.4,1-0.8 c0.2-0.3,0.2-0.8,0.2-1.4V44.2c0-0.8-0.1-1.3-0.2-1.5c-0.1-0.3-0.4-0.6-0.9-0.7l-0.7-0.4c-0.4-0.2-0.7-0.4-0.8-0.7 c-0.1-0.3-0.2-0.7-0.2-1.2v-2.2h14.1l10,30.3l10.7-30.3H78v2.2c0,0.4-0.1,0.9-0.2,1.2c-0.1,0.3-0.4,0.6-0.8,0.7l-0.8,0.3 c-0.4,0.2-0.7,0.4-0.9,0.7c-0.2,0.3-0.2,0.8-0.2,1.5V76c0,0.7,0.1,1.2,0.2,1.4c0.2,0.3,0.5,0.6,1.1,0.8l0.9,0.3 c0.4,0.1,0.7,0.3,0.9,0.7c0.2,0.3,0.3,0.7,0.3,1.2v2.2h-15v-2.2c0-0.4,0.1-0.9,0.3-1.1c0.2-0.3,0.6-0.5,0.9-0.7l0.9-0.3 c0.5-0.2,0.9-0.4,1-0.8c0.2-0.3,0.2-0.8,0.2-1.4V48.5c0-0.6,0-1.4,0.1-2.4c0-1,0.1-2.1,0.2-3.3c-0.2,0.5-0.5,1.4-1,2.8 c-0.4,1.4-0.9,2.5-1.1,3.4L53.5,82.8h-3L38.9,48c-0.1-0.3-0.3-1.2-0.8-2.7c-0.2-0.8-0.3-1.3-0.4-1.8c0.1,1.3,0.2,2.3,0.2,2.9 c0,0.6,0.1,1.1,0.1,1.4v28.3c0,0.7,0.1,1.2,0.2,1.4c0.2,0.3,0.6,0.5,1,0.8l0.9,0.3c0.4,0.1,0.7,0.3,0.9,0.7 c0.2,0.3,0.3,0.7,0.3,1.2v2.2L28.9,82.8L28.9,82.8z M255.6,40.6c-2.9-2.1-7.2-3.1-12.8-3.1h-17.2v2.2c0,0.5,0.1,0.9,0.3,1.2c0.2,0.3,0.4,0.6,0.9,0.7l1,0.4 c0.4,0.2,0.8,0.4,1,0.8c0.1,0.3,0.2,0.8,0.2,1.5v32.1c0,0.6,0,1.1-0.2,1.4c-0.1,0.3-0.4,0.5-1,0.8l-0.9,0.3 c-0.3,0.1-0.7,0.3-0.9,0.7c-0.2,0.3-0.3,0.8-0.3,1.2v1.8h15.7v-2.2c0-0.4-0.1-0.8-0.3-1.1c-0.2-0.2-0.5-0.6-1-0.7l-0.9-0.3 c-0.5-0.2-0.9-0.4-1.1-0.8c-0.1-0.2-0.2-0.8-0.2-1.4V62.5h5.4c5.4,0,9.5-1.1,12.4-3.2c2.7-2.1,4.1-5.3,4.1-9.4 C259.8,45.7,258.4,42.7,255.6,40.6z M248.2,56.1c-1.6,1.2-4.2,1.9-7.8,1.9h-2.5V42.5h2.8c3.5,0,6,0.7,7.6,2c1.6,1.3,2.4,3.3,2.4,6 C250.7,53.1,249.8,54.9,248.2,56.1z M285.1,79.2l-1-1.3c-0.2,0.1-0.4,0.1-0.7,0.2c-0.2,0-0.4,0.1-0.7,0.1c-1,0-1.5-0.2-1.9-0.8 c-0.3-0.4-0.6-1.4-0.6-2.9v-7.3c0-3.5-1.1-6.2-3.1-8.1c-2.1-1.9-5.1-2.8-9.1-2.8c-2.6,0-4.7,0.5-6.4,1.6c-1.7,1.1-2.5,2.4-2.5,3.8 c0,1.1,0.3,2,0.9,2.6c0.5,0.7,1.4,1,2.5,1c1.2,0,2.1-0.4,2.8-1.2c0.8-0.9,1.1-2,1.2-3.4c0.5-0.1,1-0.2,1.2-0.2c0.2,0,0.5,0,0.8,0 c1.2,0,2.3,0.4,3.2,1.4s1.2,2.2,1.2,3.7v0.4c-5.2,0.3-9.1,1.3-11.7,3.1c-2.6,1.7-3.9,4-3.9,7.1c0,2.3,0.8,4.1,2.4,5.5 c1.6,1.4,3.7,2.1,6.4,2.1c1.6,0,3.1-0.3,4.4-0.9c1.3-0.8,2.5-1.6,3.6-2.8c0.6,1.2,1.3,2.1,2.2,2.6c1,0.5,2.1,0.9,3.4,0.9 c1.4,0,2.8-0.4,3.9-1.2c1.2-0.9,1.7-1.5,1.7-2.3c0-0.2,0-0.4,0-0.6C285.2,79.4,285.1,79.3,285.1,79.2z M272.8,74.3 c0,1.5-0.3,2.7-1.1,3.5c-0.8,0.8-1.8,1.2-3.4,1.2c-1.1,0-1.9-0.3-2.5-0.9c-0.5-0.5-0.9-1.4-0.9-2.5c0-1.7,0.7-3.2,2-4.1 c1.3-1,3.3-1.4,5.9-1.5V74.3z M289,63.1c-0.2-0.4-0.4-0.9-0.7-1.1c-0.2-0.2-0.5-0.5-1.1-0.9l-0.9-0.6c-0.3-0.1-0.6-0.4-0.8-0.8 c-0.2-0.3-0.3-0.8-0.3-1.2V57h13.9v1.6c0,0.4-0.1,0.8-0.3,1.1c-0.2,0.3-0.4,0.5-0.6,0.6l-0.7,0.4c-0.2,0.1-0.4,0.3-0.6,0.4 c-0.1,0.2-0.2,0.3-0.2,0.6c0,0.1,0,0.3,0.1,0.5c0,0.2,0.1,0.3,0.2,0.5l3.1,8.1c0.3,0.8,0.6,1.5,0.8,2.1c0.2,0.5,0.4,1.1,0.5,1.6 l0.2-0.9c0.8-2.6,1.3-4,1.4-4.6l2.7-6.4c0.1-0.2,0.1-0.3,0.1-0.3c0-0.1,0-0.1,0-0.2c0-0.3-0.1-0.6-0.3-0.9 c-0.2-0.2-0.4-0.4-0.9-0.6l-0.8-0.4c-0.3-0.1-0.6-0.3-0.8-0.6c-0.2-0.3-0.3-0.8-0.3-1.1V57h11.3v1.6c0,0.3-0.1,0.8-0.3,1.1 c-0.2,0.3-0.5,0.5-1,0.8l-1,0.5c-1,0.4-1.8,1.8-2.6,3.6c-0.1,0.2-0.1,0.3-0.2,0.4L301,84.4c-1.5,3.7-3.3,6.3-5,7.9 c-1.7,1.6-3.8,2.4-6.2,2.4c-1.5,0-2.7-0.4-3.6-1.3c-1-0.9-1.4-2-1.4-3.3c0-1.1,0.3-2.1,1-2.7c0.7-0.8,1.5-1.1,2.5-1.1 s1.8,0.4,2.7,1.2c0.9,0.8,1.4,1.2,1.8,1.2c0.6,0,1.3-0.4,1.9-1.2c0.7-0.8,1.4-2.3,2.4-4.4L289,63.1z" />
                            <polygon fill="#FFFFFF" points="324.9,2.2 328.6,2.2 328.6,13 331.2,13 331.2,2.2 335,2.2 335,0 324.9,0" />
                            <polygon fill="#FFFFFF" points="343.8,8.9 341.4,0 337.6,0 337.6,13 340,13 340,2.7 342.5,13 345,13 347.6,2.7 347.6,13 350,13 350,0 346.1,0" />
                        </svg> */}
                    </a>
                    <div className="SidebarTriggerMobile SidebarMini" id="siderbarMenu" onClick={handleClick}>
                        <i>
                            <svg x="0px" y="0px" viewBox="0 0 73.168 73.168">
                                <path d="M4.242,14.425h64.684c2.344,0,4.242-1.933,4.242-4.324c0-2.385-1.898-4.325-4.242-4.325H4.242 C1.898,5.776,0,7.716,0,10.101C0,12.493,1.898,14.425,4.242,14.425z M68.926,32.259H4.242C1.898,32.259,0,34.2,0,36.584 c0,2.393,1.898,4.325,4.242,4.325h64.684c2.344,0,4.242-1.933,4.242-4.325C73.168,34.2,71.27,32.259,68.926,32.259z M68.926,58.742H4.242C1.898,58.742,0,60.683,0,63.067c0,2.393,1.898,4.325,4.242,4.325h64.684c2.344,0,4.242-1.935,4.242-4.325 C73.168,60.683,71.27,58.742,68.926,58.742z" />
                            </svg>
                        </i>
                    </div>
                </div>
                <div className="HeaderContainer">
                    {/* User Dropdown Start */}
                    <div className="UserDetails dropdown">
                        {/* <div className="UserInfo dropdown-toggle" id="UserDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="UserPic"><img src={logo} /></div>
                            <div className="UserName" id="divname">shafiullah</div>
                        </div> */}
                        <div className="UserDropdown dropdown-menu" aria-labelledby="UserDropdown">
                            <ul>
                                <li className="user-mob-balance">
                                    <a href="javascript:void(0);">
                                        <i>
                                            <svg x={0} y={0} viewBox="0 0 28 28">
                                                <path d="M27.982,13.044 L26.627,13.044 L26.627,6.867 C26.627,5.386 25.411,4.182 23.916,4.182 L22.081,4.182 L20.202,0.836 C19.916,0.324 19.371,0.007 18.780,0.007 C18.505,0.007 18.232,0.077 17.990,0.210 L10.781,4.182 L2.728,4.182 C1.233,4.182 0.017,5.386 0.017,6.867 L0.017,25.307 C0.017,26.788 1.233,27.993 2.728,27.993 L23.916,27.993 C25.411,27.993 26.627,26.788 26.627,25.307 L26.627,19.892 L27.982,19.892 L27.982,13.044 L27.982,13.044 ZM23.916,5.256 C24.751,5.256 25.433,5.884 25.525,6.688 L23.488,6.688 L22.684,5.256 L23.916,5.256 ZM18.518,1.149 C18.772,1.007 19.114,1.106 19.254,1.357 L22.247,6.688 L8.463,6.688 L18.518,1.149 ZM25.543,25.307 C25.543,26.196 24.813,26.919 23.916,26.919 L2.728,26.919 C1.831,26.919 1.101,26.196 1.101,25.307 L1.101,6.867 C1.101,5.979 1.831,5.256 2.728,5.256 L8.831,5.256 L6.231,6.688 L3.067,6.688 C2.767,6.688 2.525,6.929 2.525,7.225 C2.525,7.522 2.767,7.763 3.067,7.763 L4.281,7.763 L24.091,7.763 L25.543,7.763 L25.543,13.044 L21.578,13.044 C19.737,13.044 18.239,14.529 18.239,16.353 L18.239,16.584 C18.239,18.408 19.737,19.892 21.578,19.892 L25.543,19.892 L25.543,25.307 L25.543,25.307 ZM26.898,18.818 L26.627,18.818 L21.578,18.818 C20.335,18.818 19.323,17.816 19.323,16.583 L19.323,16.352 C19.323,15.120 20.334,14.118 21.578,14.118 L26.627,14.118 L26.898,14.118 L26.898,18.818 ZM23.239,16.512 C23.239,17.167 22.703,17.698 22.042,17.698 C21.380,17.698 20.845,17.167 20.845,16.512 C20.845,15.857 21.380,15.326 22.042,15.326 C22.703,15.326 23.239,15.857 23.239,16.512 Z" />
                                            </svg>
                                        </i>
                                        <span id="baldiv2">2162.81</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i>
                                            <svg x={0} y={0} viewBox="0 0 15 15" className="sm-svg default-svg">
                                                <path d="M9.355,10.534 C8.985,10.473 8.977,9.417 8.977,9.417 C8.977,9.417 10.064,8.300 10.301,6.799 C10.939,6.799 11.333,5.203 10.695,4.641 C10.722,4.050 11.515,-0.000 7.500,-0.000 C3.485,-0.000 4.278,4.050 4.305,4.641 C3.667,5.203 4.061,6.799 4.698,6.799 C4.936,8.300 6.023,9.417 6.023,9.417 C6.023,9.417 6.015,10.473 5.645,10.534 C4.452,10.730 -0.000,12.767 -0.000,15.000 L7.500,15.000 L15.000,15.000 C15.000,12.767 10.548,10.730 9.355,10.534 Z" />
                                            </svg>
                                        </i>
                                        <span>Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i>
                                            <svg x={0} y={0} viewBox="0 0 16 16" className="sm-svg default-svg">
                                                <path d="M15.920,7.112 C15.895,6.887 15.633,6.718 15.407,6.718 C14.675,6.718 14.026,6.287 13.753,5.621 C13.475,4.940 13.655,4.144 14.200,3.643 C14.372,3.486 14.392,3.223 14.248,3.040 C13.874,2.564 13.448,2.133 12.983,1.760 C12.801,1.614 12.534,1.634 12.377,1.809 C11.901,2.337 11.046,2.534 10.385,2.257 C9.698,1.968 9.264,1.270 9.307,0.521 C9.320,0.285 9.149,0.081 8.915,0.053 C8.318,-0.016 7.716,-0.018 7.118,0.048 C6.887,0.074 6.715,0.274 6.723,0.506 C6.749,1.248 6.310,1.934 5.629,2.213 C4.977,2.480 4.128,2.286 3.653,1.762 C3.496,1.590 3.233,1.569 3.050,1.711 C2.572,2.088 2.136,2.518 1.758,2.991 C1.611,3.175 1.633,3.441 1.806,3.599 C2.362,4.103 2.541,4.905 2.253,5.595 C1.977,6.253 1.295,6.676 0.515,6.676 C0.262,6.668 0.082,6.839 0.054,7.069 C-0.016,7.670 -0.017,8.283 0.050,8.889 C0.076,9.114 0.345,9.282 0.574,9.282 C1.269,9.264 1.937,9.695 2.217,10.378 C2.496,11.060 2.317,11.855 1.770,12.356 C1.600,12.514 1.578,12.776 1.722,12.959 C2.093,13.433 2.519,13.863 2.985,14.240 C3.168,14.387 3.434,14.367 3.593,14.191 C4.071,13.662 4.926,13.466 5.584,13.743 C6.273,14.032 6.706,14.730 6.664,15.479 C6.650,15.715 6.823,15.920 7.056,15.946 C7.361,15.982 7.668,16.000 7.976,16.000 C8.268,16.000 8.560,15.984 8.852,15.951 C9.084,15.926 9.255,15.726 9.248,15.493 C9.221,14.752 9.660,14.066 10.340,13.787 C10.997,13.518 11.843,13.715 12.318,14.238 C12.475,14.410 12.736,14.431 12.920,14.288 C13.398,13.913 13.832,13.483 14.212,13.009 C14.359,12.825 14.339,12.559 14.164,12.401 C13.609,11.897 13.428,11.094 13.717,10.405 C13.988,9.756 14.645,9.321 15.351,9.321 L15.449,9.323 C15.678,9.342 15.889,9.165 15.917,8.931 C15.987,8.329 15.988,7.718 15.920,7.112 ZM7.998,10.685 C6.529,10.685 5.335,9.488 5.335,8.017 C5.335,6.545 6.529,5.348 7.998,5.348 C9.467,5.348 10.661,6.545 10.661,8.017 C10.661,9.488 9.467,10.685 7.998,10.685 Z" />
                                            </svg>
                                        </i>
                                        <span>Complain</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i>
                                            <svg x={0} y={0} viewBox="0 0 14 14" className="sm-svg default-svg">
                                                <path d="M13.943,6.640 C13.913,6.711 13.871,6.776 13.817,6.829 L12.070,8.577 C11.957,8.692 11.808,8.748 11.659,8.748 C11.509,8.748 11.361,8.692 11.247,8.577 C11.019,8.350 11.019,7.981 11.247,7.753 L12.000,7.000 L8.747,7.000 C8.425,7.000 8.165,6.739 8.165,6.417 C8.165,6.095 8.425,5.834 8.747,5.834 L12.000,5.834 L11.247,5.080 C11.019,4.853 11.019,4.484 11.247,4.256 C11.475,4.029 11.843,4.029 12.070,4.256 L13.817,6.004 C13.871,6.058 13.913,6.123 13.943,6.194 C14.002,6.336 14.002,6.497 13.943,6.640 ZM9.912,4.669 C9.590,4.669 9.329,4.407 9.329,4.086 L9.329,1.171 L4.563,1.171 L6.585,1.779 C6.831,1.853 7.000,2.080 7.000,2.337 L7.000,11.663 L9.329,11.663 L9.329,8.748 C9.329,8.427 9.590,8.166 9.912,8.166 C10.234,8.166 10.494,8.427 10.494,8.748 L10.494,12.246 C10.494,12.567 10.234,12.828 9.912,12.828 L7.000,12.828 L7.000,13.411 C7.000,13.586 6.922,13.751 6.787,13.862 C6.682,13.948 6.551,13.994 6.418,13.994 C6.380,13.994 6.342,13.991 6.304,13.982 L0.481,12.817 C0.209,12.762 0.013,12.524 0.013,12.246 L0.013,0.588 C0.013,0.577 0.020,0.566 0.021,0.555 C0.021,0.538 0.016,0.521 0.019,0.504 C0.026,0.455 0.046,0.412 0.065,0.368 C0.071,0.351 0.073,0.334 0.081,0.319 C0.120,0.246 0.173,0.185 0.236,0.135 C0.241,0.131 0.243,0.125 0.247,0.121 C0.259,0.112 0.275,0.111 0.288,0.103 C0.340,0.070 0.395,0.046 0.456,0.031 C0.483,0.024 0.507,0.020 0.535,0.017 C0.555,0.014 0.574,0.006 0.595,0.006 L9.912,0.006 C10.234,0.006 10.494,0.267 10.494,0.588 L10.494,4.086 C10.494,4.407 10.234,4.669 9.912,4.669 Z" />
                                            </svg>
                                        </i>
                                        <span>Logout</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* User Dropdown End */}
                    <div className="HeaderRight">
                        {/* <div className="headerQr">
                           
                            <a href="JavaScript:;" data-toggle="modal" data-target="#QRCodeModal">
                                <i className="fa fa-qrcode fa-2x" aria-hidden="true" />
                                <span>My QR Code</span>
                            </a>
                        </div> */}

                        {/* User Wallet Start */}
                        <div className="UserWallet" >
                            <i>
                                <svg x={0} y={0} viewBox="0 0 28 28">
                                    <path d="M27.982,13.044 L26.627,13.044 L26.627,6.867 C26.627,5.386 25.411,4.182 23.916,4.182 L22.081,4.182 L20.202,0.836 C19.916,0.324 19.371,0.007 18.780,0.007 C18.505,0.007 18.232,0.077 17.990,0.210 L10.781,4.182 L2.728,4.182 C1.233,4.182 0.017,5.386 0.017,6.867 L0.017,25.307 C0.017,26.788 1.233,27.993 2.728,27.993 L23.916,27.993 C25.411,27.993 26.627,26.788 26.627,25.307 L26.627,19.892 L27.982,19.892 L27.982,13.044 L27.982,13.044 ZM23.916,5.256 C24.751,5.256 25.433,5.884 25.525,6.688 L23.488,6.688 L22.684,5.256 L23.916,5.256 ZM18.518,1.149 C18.772,1.007 19.114,1.106 19.254,1.357 L22.247,6.688 L8.463,6.688 L18.518,1.149 ZM25.543,25.307 C25.543,26.196 24.813,26.919 23.916,26.919 L2.728,26.919 C1.831,26.919 1.101,26.196 1.101,25.307 L1.101,6.867 C1.101,5.979 1.831,5.256 2.728,5.256 L8.831,5.256 L6.231,6.688 L3.067,6.688 C2.767,6.688 2.525,6.929 2.525,7.225 C2.525,7.522 2.767,7.763 3.067,7.763 L4.281,7.763 L24.091,7.763 L25.543,7.763 L25.543,13.044 L21.578,13.044 C19.737,13.044 18.239,14.529 18.239,16.353 L18.239,16.584 C18.239,18.408 19.737,19.892 21.578,19.892 L25.543,19.892 L25.543,25.307 L25.543,25.307 ZM26.898,18.818 L26.627,18.818 L21.578,18.818 C20.335,18.818 19.323,17.816 19.323,16.583 L19.323,16.352 C19.323,15.120 20.334,14.118 21.578,14.118 L26.627,14.118 L26.898,14.118 L26.898,18.818 ZM23.239,16.512 C23.239,17.167 22.703,17.698 22.042,17.698 C21.380,17.698 20.845,17.167 20.845,16.512 C20.845,15.857 21.380,15.326 22.042,15.326 C22.703,15.326 23.239,15.857 23.239,16.512 Z" />
                                </svg>
                            </i>
                            <div className="WalletDetails">
                                <h3>Available Balance</h3>
                                <h2>₹ <span id="baldiv">2162.81</span></h2>
                            </div>
                        </div>
                        {/* User Wallet End */}
                        {/* <a href="https://m.masterpay.pro/Retailer/Paytm_transfer" class="walletTopup">
                      <div class="UserWallet">
                          <i>
                              <svg x="0" y="0" viewBox="0 0 28 28">
                                  <path
                                      d="M27.982,13.044 L26.627,13.044 L26.627,6.867 C26.627,5.386 25.411,4.182 23.916,4.182 L22.081,4.182 L20.202,0.836 C19.916,0.324 19.371,0.007 18.780,0.007 C18.505,0.007 18.232,0.077 17.990,0.210 L10.781,4.182 L2.728,4.182 C1.233,4.182 0.017,5.386 0.017,6.867 L0.017,25.307 C0.017,26.788 1.233,27.993 2.728,27.993 L23.916,27.993 C25.411,27.993 26.627,26.788 26.627,25.307 L26.627,19.892 L27.982,19.892 L27.982,13.044 L27.982,13.044 ZM23.916,5.256 C24.751,5.256 25.433,5.884 25.525,6.688 L23.488,6.688 L22.684,5.256 L23.916,5.256 ZM18.518,1.149 C18.772,1.007 19.114,1.106 19.254,1.357 L22.247,6.688 L8.463,6.688 L18.518,1.149 ZM25.543,25.307 C25.543,26.196 24.813,26.919 23.916,26.919 L2.728,26.919 C1.831,26.919 1.101,26.196 1.101,25.307 L1.101,6.867 C1.101,5.979 1.831,5.256 2.728,5.256 L8.831,5.256 L6.231,6.688 L3.067,6.688 C2.767,6.688 2.525,6.929 2.525,7.225 C2.525,7.522 2.767,7.763 3.067,7.763 L4.281,7.763 L24.091,7.763 L25.543,7.763 L25.543,13.044 L21.578,13.044 C19.737,13.044 18.239,14.529 18.239,16.353 L18.239,16.584 C18.239,18.408 19.737,19.892 21.578,19.892 L25.543,19.892 L25.543,25.307 L25.543,25.307 ZM26.898,18.818 L26.627,18.818 L21.578,18.818 C20.335,18.818 19.323,17.816 19.323,16.583 L19.323,16.352 C19.323,15.120 20.334,14.118 21.578,14.118 L26.627,14.118 L26.898,14.118 L26.898,18.818 ZM23.239,16.512 C23.239,17.167 22.703,17.698 22.042,17.698 C21.380,17.698 20.845,17.167 20.845,16.512 C20.845,15.857 21.380,15.326 22.042,15.326 C22.703,15.326 23.239,15.857 23.239,16.512 Z" />
                              </svg>
                          </i>
                          <div class="WalletDetails">
                              <h3>Load <br> Wallet</h3>
                          </div>
                      </div>
                  </a> */}
                        <div className="dropdown loadwallet ml-3" onClick={() => { setLoadWallet(!loadwallet) }}>
                            <div className="UserWallet dropdown-toggle" id="walletDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i>
                                    <svg x={0} y={0} viewBox="0 0 28 28">
                                        <path d="M27.982,13.044 L26.627,13.044 L26.627,6.867 C26.627,5.386 25.411,4.182 23.916,4.182 L22.081,4.182 L20.202,0.836 C19.916,0.324 19.371,0.007 18.780,0.007 C18.505,0.007 18.232,0.077 17.990,0.210 L10.781,4.182 L2.728,4.182 C1.233,4.182 0.017,5.386 0.017,6.867 L0.017,25.307 C0.017,26.788 1.233,27.993 2.728,27.993 L23.916,27.993 C25.411,27.993 26.627,26.788 26.627,25.307 L26.627,19.892 L27.982,19.892 L27.982,13.044 L27.982,13.044 ZM23.916,5.256 C24.751,5.256 25.433,5.884 25.525,6.688 L23.488,6.688 L22.684,5.256 L23.916,5.256 ZM18.518,1.149 C18.772,1.007 19.114,1.106 19.254,1.357 L22.247,6.688 L8.463,6.688 L18.518,1.149 ZM25.543,25.307 C25.543,26.196 24.813,26.919 23.916,26.919 L2.728,26.919 C1.831,26.919 1.101,26.196 1.101,25.307 L1.101,6.867 C1.101,5.979 1.831,5.256 2.728,5.256 L8.831,5.256 L6.231,6.688 L3.067,6.688 C2.767,6.688 2.525,6.929 2.525,7.225 C2.525,7.522 2.767,7.763 3.067,7.763 L4.281,7.763 L24.091,7.763 L25.543,7.763 L25.543,13.044 L21.578,13.044 C19.737,13.044 18.239,14.529 18.239,16.353 L18.239,16.584 C18.239,18.408 19.737,19.892 21.578,19.892 L25.543,19.892 L25.543,25.307 L25.543,25.307 ZM26.898,18.818 L26.627,18.818 L21.578,18.818 C20.335,18.818 19.323,17.816 19.323,16.583 L19.323,16.352 C19.323,15.120 20.334,14.118 21.578,14.118 L26.627,14.118 L26.898,14.118 L26.898,18.818 ZM23.239,16.512 C23.239,17.167 22.703,17.698 22.042,17.698 C21.380,17.698 20.845,17.167 20.845,16.512 C20.845,15.857 21.380,15.326 22.042,15.326 C22.703,15.326 23.239,15.857 23.239,16.512 Z" />
                                    </svg>
                                </i>
                                <div className="WalletDetails">
                                    <h3>Load Wallet</h3>
                                </div>
                            </div>
                            <div className={`walletDropdown dropdown-menu ${loadwallet ? "mm-show" : "extra"}`} aria-labelledby="walletDropdown" >
                                <ul className={``}>
                                    {/* START FOR NEW T0 & T1 PG LOGIC*/}
                                    {/* END FOR NEW T0 & T1 PG LOGIC*/}
                                    {/* stop Load wallet */}
                                    <li>
                                        <Link to="Retailer/Paytm_wallet">
                                            <SiPaytm />
                                            <span>Paytm Wallet</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="RightActions">
                            {/* Notifications Start */}
                            <div className="NotificationsMain dropdown">
                                <a href="JavaScript:;" className="dropdown-toggle PendingIc" id="NotificationDD" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    <svg x={0} y={0} viewBox="0 0 22 23">
                                        <path d="M19.662,20.459 C18.683,17.979 18.152,14.924 20.877,9.408 C22.455,6.214 21.223,2.303 18.130,0.690 C15.037,-0.923 11.237,0.362 9.659,3.557 C6.932,9.077 4.221,10.438 1.693,11.087 C0.991,11.271 0.401,11.755 0.074,12.417 C-0.106,12.781 0.034,13.225 0.386,13.409 L6.441,16.567 C6.013,18.185 6.726,19.945 8.230,20.730 C9.734,21.514 11.537,21.068 12.556,19.757 L18.611,22.916 C18.963,23.100 19.394,22.954 19.574,22.590 C19.903,21.923 19.935,21.146 19.662,20.459 ZM8.881,19.412 C8.087,18.997 7.665,18.122 7.765,17.258 L11.232,19.067 C10.612,19.660 9.676,19.826 8.881,19.412 ZM1.927,12.555 C1.963,12.541 2.000,12.529 2.037,12.519 C5.890,11.529 8.551,9.048 10.935,4.222 C12.154,1.755 15.090,0.762 17.479,2.008 C19.868,3.254 20.820,6.275 19.601,8.743 C17.219,13.564 16.841,17.236 18.336,21.022 C18.350,21.059 18.363,21.097 18.374,21.135 L1.927,12.555 Z" />
                                    </svg>
                                </a>
                                <div className="NotiDD dropdown-menu dropdown-menu-right" aria-labelledby="NotificationDD">
                                    <ul>
                                        <li className="all-link">
                                            <a href="#">
                                                <span>See all notifications</span>
                                                <i>
                                                    <svg x={0} y={0} viewBox="0 0 7 11">
                                                        <path d="M6.783,6.060 L2.231,10.803 C1.941,11.104 1.472,11.104 1.182,10.803 C0.893,10.501 0.893,10.012 1.182,9.710 L5.210,5.514 L1.182,1.317 C0.893,1.015 0.893,0.526 1.182,0.224 C1.472,-0.077 1.941,-0.077 2.231,0.224 L6.783,4.967 C6.928,5.118 7.000,5.316 7.000,5.514 C7.000,5.711 6.927,5.909 6.783,6.060 Z">
                                                        </path>
                                                    </svg>
                                                </i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Notifications End */}
                            <div className="Signout">
                                <a href="https://m.masterpay.pro/agentlogout">
                                    <svg x={0} y={0} viewBox="0 0 20 22">
                                        <path d="M10.000,22.000 C4.477,22.000 -0.000,17.486 -0.000,11.916 C-0.000,7.871 2.385,4.266 5.998,2.673 C6.458,2.470 6.994,2.681 7.196,3.145 C7.397,3.609 7.187,4.150 6.727,4.352 C3.770,5.656 1.818,8.606 1.818,11.916 C1.818,16.473 5.481,20.167 10.000,20.167 C14.518,20.167 18.182,16.473 18.182,11.916 C18.182,8.605 16.229,5.655 13.271,4.352 C12.811,4.150 12.601,3.609 12.802,3.146 C13.003,2.682 13.539,2.470 13.999,2.672 C17.614,4.265 20.000,7.870 20.000,11.916 C20.000,17.485 15.522,22.000 10.000,22.000 ZM10.000,10.083 C9.498,10.083 9.090,9.673 9.090,9.167 L9.090,0.917 C9.090,0.410 9.498,-0.000 10.000,-0.000 C10.502,-0.000 10.909,0.410 10.909,0.917 L10.909,9.167 C10.909,9.673 10.502,10.083 10.000,10.083 Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <input type="hidden" id="das_hidgetrechargevalues_url" defaultValue="https://m.masterpay.pro/Retailer/getRechargeValues" autoComplete="off" />
            </header>

        </>
    )
}
export default AdminHeader