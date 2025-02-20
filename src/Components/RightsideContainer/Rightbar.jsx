import React from "react";
import "./rightbar.css";
import img from "../../assets/travelworld.jpg"
import image1 from "../../assets/Icons/ttnav.png"

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
    <div>

    </div>
    <div>
        <img src={`${image1}`} className="Profileimage"></img>
        <p>Salah</p>
    </div>
</div>
            </div>
        </div>
    )

}