import React from "react";
import "./rightbar.css";
import img from "../../assets/travelworld.jpg"

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
        </div>
    )

}