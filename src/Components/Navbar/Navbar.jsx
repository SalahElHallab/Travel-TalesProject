import React from "react";
import "./navbar.css";
import searchIcon from '../../assets/Icons/searchlogo.svg';
import Notifications from '../../assets/Icons/bell.svg';
import Message from '../../assets/Icons/chaticon.svg';
import Profileimage from '../../assets/Icons/ttnav.png';



export default function Navbar(){
    return(
        <div className="mainNavbar">
            <div className="LogoContainer">
                <p>Travel Tales</p>
            </div>
            <div>
                <div className="searchInputContainer">
                    <img src={`${searchIcon}`} className="Icons" alt="" />
                    <input type="text" placeholder="Search travelers" name="" id="" />
                </div>
            </div>
            <div className="IconsContainer">
                <img src={`${Notifications}`} className="Icons" alt="" />
                <img src={`${Message}`} className="Icons" alt="" />
                <div style={{display:'flex', alignItems:'center'}}>
                <img src={`${Profileimage}`} className="ProfileImage" alt="" />
                <p className="profilename">Salah</p>
                </div>
            </div>

        </div>
    )
}