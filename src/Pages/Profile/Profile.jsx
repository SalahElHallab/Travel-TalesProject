import React from "react";
import "./profile.css"
import Navbar from "../../Components/Navbar/Navbar";
import ProfileLeftbar from "../../Components/ProfileLeftsideContainer/ProfileLeftbar";
import MainPost from "../../Components/MainPostContainer/MainPost";
import ProfileRightbar from "../../Components/ProfileRightsideContainer/ProfileRightbar";

export default function Profile() {
    return(
        <div className="profile">
            <Navbar/>
            <div className="subProfileContainer">
              <ProfileLeftbar/>
              <MainPost/>
              <ProfileRightbar/>

            </div>
        </div>
    )

}
