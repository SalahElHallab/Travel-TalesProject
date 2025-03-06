import React from "react";
import "./profileleftbar.css";
import notimg from "../../assets/Icons/ttnav.png";
import img1 from "../../assets/p2.jpg";

export default function ProfileLeftbar() {
    return (
        <div className="ProfileLeftbar">
            <div className="NotificationContainer">
                <img src={`${notimg}`} className="ProfilepageCover" />

                <div style={{ display: "flex", alignItems: "center", marginTop: -20 }}>
                    <img src={`${img1}`} className="Profilepageimage" />
                    <div>
                        <p style={{ marginLeft: 6, marginTop: 20, color: "white", textAlign:"start", color:"black" }}>Salah</p>
                        <p style={{ marginLeft: 6, marginTop: 20, color: "white", textAlign:"start", marginTop:-15, fontSize:13, color: "#2A5D9F" }}>Lebanese</p>
                    </div>

                </div>
                <div style={{display:'flex', justifyContent:"space-between"}}>
                    <p style={{color:"black", marginLeft:20, fontSize:'14px'}} > Places Visited </p>
                    <p style={{color:"black", marginRight:40, fontSize:'12px', marginTop:17}} > 1 </p>
                </div>
                <hr style={{marginTop:-10}}/>
                <div style={{display:'flex', justifyContent:"space-between", marginTop:-20}}>
                    <p style={{color:"black", marginLeft:20, fontSize:'14px'}} >Travel Buddies</p>
                    <p style={{color:"black", marginRight:40, fontSize:'12px', marginTop:17}} > 2 </p>
                </div>
                <hr style={{marginTop:-10}}/>
                <div style={{ marginTop:-20}}>
                    <h5 style={{color:"black",  fontSize:'14px',  textAlign:"center", marginTop:30, marginBottom:-5,  fontFamily: "'Lucida Handwriting', serif"}} >Traveler's Note</h5>
                    <p style={{color:"black",  fontSize:'14px', textAlign:"center", marginLeft:10, marginRight:10}} > Capturing the world one photo at a time while chasing the best espresso.</p>
                </div>
                <button style={{width:"100%", paddingTop:7, paddingBottom:7, border:"none", backgroundColor:"#CFEFFD"}}>Edit Note</button>
            </div>
            <div className="NotificationContainer">

                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <p style={{ marginLeft: "-20px" }}>Explore</p>
                    <p style={{ color: "#aaa", marginLeft: "40px" }}>See all</p>
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