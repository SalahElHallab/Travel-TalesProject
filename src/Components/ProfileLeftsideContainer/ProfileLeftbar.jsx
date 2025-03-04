import React from "react";
import "./profileleftbar.css";
import notimg from "../../assets/Icons/ttnav.png";

export default function ProfileLeftbar() {
    return (
        <div className="ProfileLeftbar">
            <div className="NotificationContainer">

                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <p style={{marginLeft:"-20px"}}>Notifications</p>
                    <p style={{ color: "#aaa" ,marginLeft:"40px"}}>See all</p>
                </div>
                <div style={{display: "flex", alignItems:"center"}}>
                    <img src={`${notimg}`} className="notificationimg"></img>
                    <p style={{marginLeft:"5px", color:"#aaa", fontSize:13, textAlign:"start", width:"120px"}}>Ahmed liked your post</p>
                    <img src={`${notimg}`} className="likeimg"></img>
                </div>
                <div style={{display: "flex", alignItems:"center"}}>
                    <img src={`${notimg}`} className="notificationimg"></img>
                    <p style={{marginLeft:"5px", color:"#aaa", fontSize:13, textAlign:"start", width:"120px"}}>Salah started to follow you</p>
                    <img src={`${notimg}`} className="followinguserimage"></img>
                </div>
                <div style={{display: "flex", alignItems:"center"}}>
                    <img src={`${notimg}`} className="notificationimg"></img>
                    <p style={{marginLeft:"5px", color:"#aaa", fontSize:13, textAlign:"start", width:"120px"}}>Ahmed liked your post</p>
                    <img src={`${notimg}`} className="likeimg"></img>
                </div>
                <div style={{display: "flex", alignItems:"center"}}>
                    <img src={`${notimg}`} className="notificationimg"></img>
                    <p style={{marginLeft:"5px", color:"#aaa", fontSize:13, textAlign:"start", width:"120px"}}>Ahmed liked your post</p>
                    <img src={`${notimg}`} className="likeimg"></img>
                </div>
                <div style={{display: "flex", alignItems:"center"}}>
                    <img src={`${notimg}`} className="notificationimg"></img>
                    <p style={{marginLeft:"5px", color:"#aaa", fontSize:13, textAlign:"start", width:"120px"}}>Ahmed liked your post</p>
                    <img src={`${notimg}`} className="likeimg"></img>
                </div>
                <div style={{display: "flex", alignItems:"center"}}>
                    <img src={`${notimg}`} className="notificationimg"></img>
                    <p style={{marginLeft:"5px", color:"#aaa", fontSize:13, textAlign:"start", width:"120px"}}>Ahmed liked your post</p>
                    <img src={`${notimg}`} className="likeimg"></img>
                </div>
                <div style={{display: "flex", alignItems:"center"}}>
                    <img src={`${notimg}`} className="notificationimg"></img>
                    <p style={{marginLeft:"5px", color:"#aaa", fontSize:13, textAlign:"start", width:"120px"}}>Salah started to follow you</p>
                    <img src={`${notimg}`} className="followinguserimage"></img>
                </div>
                <div style={{display: "flex", alignItems:"center"}}>
                    <img src={`${notimg}`} className="notificationimg"></img>
                    <p style={{marginLeft:"5px", color:"#aaa", fontSize:13, textAlign:"start", width:"120px"}}>Salah started to follow you</p>
                    <img src={`${notimg}`} className="followinguserimage"></img>
                    
                </div>
                <div style={{display: "flex", alignItems:"center"}}>
                    <img src={`${notimg}`} className="notificationimg"></img>
                    <p style={{marginLeft:"5px", color:"#aaa", fontSize:13, textAlign:"start", width:"120px"}}>Ahmed liked your post</p>
                    <img src={`${notimg}`} className="likeimg"></img>
                    
                </div>
                
            </div>
            <div className="NotificationContainer">

                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <p style={{marginLeft:"-20px"}}>Explore</p>
                    <p style={{ color: "#aaa", marginLeft:"40px"}}>See all</p>
                </div>
                <div>
                <img src={`${notimg}`} className="exploreimage"></img>
                <img src={`${notimg}`} className="exploreimage"></img>
                <img src={`${notimg}`} className="exploreimage"></img>
                <img src={`${notimg}`} className="exploreimage"></img>
                <img src={`${notimg}`} className="exploreimage"></img>
                <img src={`${notimg}`} className="exploreimage"></img>
                </div>
                
                
            </div>



        </div>
    )

}