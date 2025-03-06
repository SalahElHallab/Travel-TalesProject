import React from "react";
import "./profile.css"
import Navbar from "../../Components/Navbar/Navbar";
import ProfileLeftbar from "../../Components/ProfileLeftsideContainer/ProfileLeftbar";
import ProfileRightbar from "../../Components/ProfileRightsideContainer/ProfileRightbar";
import ProfileMainPost from "../../Components/ProfileMainPostContainer/ProfileMainPost";

export default function Profile() {
    return(
        <div className="profile">
            <Navbar/>
            <div className="subProfileContainer">
              <ProfileLeftbar/>
              <ProfileMainPost/>
              <ProfileRightbar/>

            </div>
        </div>
    )

}
