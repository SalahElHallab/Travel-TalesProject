import React from "react";
import "./rightbar.css";
import img from "../../assets/travelworld.jpg"
import image1 from "../../assets/Icons/ttnav.png"
import addfriend from "../../assets/Icons/addfriend.svg"

export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightcontainer">
                <div className="travelcontainer">
                    <img src={`${img}`} className="travelimg"></img>
                    <div>
                        <p style={{ textAlign: "start", margin: "10px", marginTop: -50 }}>Travel Tales</p>
                        <p style={{ textAlign: "start", margin: "10px", fontSize: "12px", marginTop: "-10px" }}>Are you ready?</p>
                    </div>
                </div>
                <div className="travelcontainer">
                    <img src={`${img}`} className="travelimg"></img>
                    <div>
                        <p style={{ textAlign: "start", margin: "10px", marginTop: -50 }}>Record your travels</p>
                        <p style={{ textAlign: "start", margin: "10px", fontSize: "12px", marginTop: "-10px" }}>All about memories</p>
                    </div>
                </div>

            </div>
            <div className="rightcontainer2">

                <p>Popular Tourist</p>
                    <div>
                        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                            <div style={{display:'flex', alignItems:"center"}}>
                                <img src={`${image1}`} className="Profileimage"></img>
                                <p style={{marginLeft:"10px"}}>Salah</p>
                            </div>
                            <div style={{backgroundColor:"#aaa", padding:"10px",  marginRight:13, borderRadius:"50%"}}>
                              <img src={`${addfriend}`}className="addfriend" alt="" />  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )

}