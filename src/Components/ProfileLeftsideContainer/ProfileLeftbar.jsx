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
                        <p style={{ marginLeft: 6, marginTop: 20, color: "white", textAlign:"start" }}>Salah</p>
                        <p style={{ marginLeft: 6, marginTop: 20, color: "white", textAlign:"start", marginTop:-15, fontSize:13 }}>Lebanese</p>
                    </div>

                </div>
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