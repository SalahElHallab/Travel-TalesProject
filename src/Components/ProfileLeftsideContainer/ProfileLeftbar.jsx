import React from "react";
import "./profileleftbar.css";
import notimg from "../../assets/Icons/ttnav.png";
import img1 from "../../assets/p2.jpg";
import img2 from "../../assets/p3.jpg";
import img3 from "../../assets/p1.jpg";
import img4 from "../../assets/p4.jpg";
import img5 from "../../assets/p5.jpeg";

export default function ProfileLeftbar() {
    return (
        <div className="ProfileLeftbar">
            <div className="ProfileContainer">
                <img src={`${notimg}`} className="ProfilepageCover" />

                <div style={{ display: "flex", alignItems: "center", marginTop: -20 }}>
                    <img src={`${img1}`} className="Profilepageimage" />
                    <div>
                        <p style={{ marginLeft: 6, marginTop: 20, color: "white", textAlign: "start", color: "black" }}>Salah</p>
                        <p style={{ marginLeft: 6, marginTop: 20, color: "white", textAlign: "start", marginTop: -15, fontSize: 13, color: "#2A5D9F" }}>Lebanese</p>
                    </div>

                </div>
                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                    <p style={{ color: "black", marginLeft: 20, fontSize: '14px' }} > Places Visited </p>
                    <p style={{ color: "black", marginRight: 40, fontSize: '12px', marginTop: 17 }} > 1 </p>
                </div>

                <div style={{ display: 'flex', justifyContent: "space-between", marginTop: -20 }}>
                    <p style={{ color: "black", marginLeft: 20, fontSize: '14px' }} >Travel Buddies</p>
                    <p style={{ color: "black", marginRight: 40, fontSize: '12px', marginTop: 17 }} > 2 </p>
                </div>

                <div style={{ marginTop: -20 }}>
                    <h5 style={{ color: "black", fontSize: '14px', textAlign: "center", marginTop: 30, marginBottom: -5, fontFamily: "'Lucida Handwriting', serif" }} >Traveler's Note</h5>
                    <p style={{ color: "black", fontSize: '14px', textAlign: "center", marginLeft: 10, marginRight: 10 }} > Capturing the world one photo at a time while chasing the best espresso.</p>
                </div>
                <button style={{ width: "100%", paddingTop: 7, paddingBottom: 7, border: "none", backgroundColor: "#CFEFFD" }}>Edit Note</button>
            </div>
            <div className="FriendContainer">

                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                    <h3 style={{ marginLeft: 10 }}>Your travel buddies</h3>
                    <p style={{ marginRight: 10, color: "#aaa", marginTop: 20 }}>See all</p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', padding: '10px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={`${img2}`} className="friendimage" />
                        <p style={{ marginTop: "5px" }}>Sam Yur</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={`${img3}`} className="friendimage" />
                        <p style={{ marginTop: "5px" }}>Sara Gold</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={`${img4}`} className="friendimage" />
                        <p style={{ marginTop: "5px" }}>Aya Lam</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={`${img5}`} className="friendimage" />
                        <p style={{ marginTop: "5px" }}>Jeff Yur</p>
                    </div>
                    
                </div>

            </div>



        </div>
    )

}