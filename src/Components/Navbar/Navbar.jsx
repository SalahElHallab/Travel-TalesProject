import React from "react";
import "./navbar.css";
import searchIcon from '../../assets/Icons/searchlogo.svg';
import Notifications from '../../assets/Icons/bell.svg';
import Message from '../../assets/Icons/chaticon.svg';



export default function Navbar(){
    return(
        <div className="mainNavbar">
            <div>
                <p>Travel Tales</p>
            </div>
            <div>
                <div>
                    <img src={`${searchIcon}`} alt="" />
                    <input type="text" name="" id="" />
                </div>
            </div>
            <div>
                <img src={`${Notifications}`} alt="" />
                <img src={`${Message}`} alt="" />
                <div>
                <img src="" alt="" />
                <p>Salah</p>
                </div>
            </div>

        </div>
    )
}