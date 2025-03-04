import React from "react";
import "./profile.css"
import Navbar from "../../Components/Navbar/Navbar";
import ProfileLeftbar from "../../Components/ProfileLeftsideContainer/ProfileLeftbar";

export default function Profile() {
    return(
        <div className="profile">
            <Navbar/>
            <div>
              <ProfileLeftbar/>

            </div>
        </div>
    )

}
