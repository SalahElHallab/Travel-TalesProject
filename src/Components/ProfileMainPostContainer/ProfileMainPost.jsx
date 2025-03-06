import React from "react";
import "./profilemainpost.css";
import ContentPost from "../ContentPostContainer/ContentPost";
import Post from "../PostContainer/Post";
import cover from "../../assets/travelcover.jpg"

export default function ProfileMainPost(){
    return(
<div className="ProfilemainPostContainer">
    <div>
        <img src={`${cover}`} className="profileCoverimage"/>
        <h2 style={{marginTop:-43, color:"black", textAlign:'start', marginLeft:"15px"}}>Your Profile</h2>
    </div>
    <ContentPost/>
    <Post/>
    <Post/>
    <Post/>
</div>
    )

}