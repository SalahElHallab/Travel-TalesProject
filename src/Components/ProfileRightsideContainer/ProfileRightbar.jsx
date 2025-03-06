import React from "react";
import "./profilerightbar.css";
import img from "../../assets/travelworld.jpg"
import image1 from "../../assets/Icons/ttnav.png"
import addfriend from "../../assets/Icons/addfriend.svg"
import p1 from "../../assets/p1.jpg"
import p2 from "../../assets/p2.jpg"
import p3 from "../../assets/p3.jpg"
import p4 from "../../assets/p4.jpg"
import p5 from "../../assets/p5.jpeg"
import journalbook from "../../assets/journalbook.jpg"
export default function ProfileRightbar() {
    return (
        <div className="Profilerightbar">
            <div className="profilerightcontainer">
                <h3 style={{ marginLeft: 10 }}>Buddy request</h3>
                <div>
                    <div>
                        <div style={{ display: 'flex', alignItems: "center", marginLeft: 10, cursor: 'pointer' }}>
                            <img src={`${p3}`} className="Friendsimage" />
                            <p style={{ textAlign: "start", marginLeft: "10px" }}>Ahmed Yur wants to become travel buddies</p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            <button style={{ paddingLeft: "30px", paddingRight: "30px", paddingTop: 5, paddingBottom: 5, border: "none", backgroundColor: "#0077b6", color: "white", borderRadius: "10px" }}>Accept</button>
                            <button style={{ paddingLeft: "30px", paddingRight: "30px", paddingTop: 5, paddingBottom: 5, border: "none", backgroundColor: "#E74C3C", color: "white", borderRadius: "10px" }}>Deny</button>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: "center", marginLeft: 10, cursor: 'pointer' }}>
                            <img src={`${p5}`} className="Friendsimage" />
                            <p style={{ textAlign: "start", marginLeft: "10px" }}>Jeff Yur wants to become travel buddies</p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            <button style={{ paddingLeft: "30px", paddingRight: "30px", paddingTop: 5, paddingBottom: 5, border: "none", backgroundColor: "#0077b6", color: "white", borderRadius: "10px" }}>Accept</button>
                            <button style={{ paddingLeft: "30px", paddingRight: "30px", paddingTop: 5, paddingBottom: 5, border: "none", backgroundColor: "#E74C3C", color: "white", borderRadius: "10px" }}>Deny</button>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: "center", marginLeft: 10, cursor: 'pointer' }}>
                            <img src={`${p4}`} className="Friendsimage" />
                            <p style={{ textAlign: "start", marginLeft: "10px" }}>Sam Phil wants to become travel buddies</p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            <button style={{ paddingLeft: "30px", paddingRight: "30px", paddingTop: 5, paddingBottom: 5, border: "none", backgroundColor: "#0077b6", color: "white", borderRadius: "10px" }}>Accept</button>
                            <button style={{ paddingLeft: "30px", paddingRight: "30px", paddingTop: 5, paddingBottom: 5, border: "none", backgroundColor: "#E74C3C", color: "white", borderRadius: "10px" }}>Deny</button>
                        </div>
                    </div>



                </div>
            </div>




            <div className="rightcontainer2">

                <h3 style={{ textAlign: "start", marginLeft: "10px" }}>Popular Tourist</h3>
                <div style={{ marginTop: "-10px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: 'flex', alignItems: "center" }}>
                            <img src={`${image1}`} className="Profileimage"></img>
                            <div>
                                <p style={{ marginLeft: "10px", textAlign: "start" }}>Salah</p>
                                <p style={{ marginLeft: "10px", textAlign: "start", marginTop: "-16px", fontSize: '11px', color: "#aaa" }}>Famous travler</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#aaa", padding: "10px", marginRight: 13, borderRadius: "50%", cursor: "pointer" }}>
                            <img src={`${addfriend}`} className="addfriend" alt="" />
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: "-10px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: 'flex', alignItems: "center" }}>
                            <img src={`${p1}`} className="Profileimage"></img>
                            <div>
                                <p style={{ marginLeft: "10px", textAlign: "start" }}>Sam</p>
                                <p style={{ marginLeft: "10px", textAlign: "start", marginTop: "-16px", fontSize: '11px', color: "#aaa" }}>Famous travler</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#aaa", padding: "10px", marginRight: 13, borderRadius: "50%", cursor: "pointer" }}>
                            <img src={`${addfriend}`} className="addfriend" alt="" />
                        </div>
                    </div>

                </div>
                <div style={{ marginTop: "-10px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: 'flex', alignItems: "center" }}>
                            <img src={`${p3}`} className="Profileimage"></img>
                            <div>
                                <p style={{ marginLeft: "10px", textAlign: "start" }}>Ahmed</p>
                                <p style={{ marginLeft: "10px", textAlign: "start", marginTop: "-16px", fontSize: '11px', color: "#aaa" }}>Famous travler</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#aaa", padding: "10px", marginRight: 13, borderRadius: "50%", cursor: "pointer" }}>
                            <img src={`${addfriend}`} className="addfriend" alt="" />
                        </div>
                    </div>

                </div>
                <div style={{ marginTop: "-10px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: 'flex', alignItems: "center" }}>
                            <img src={`${p2}`} className="Profileimage"></img>
                            <div>
                                <p style={{ marginLeft: "10px", textAlign: "start" }}>Wahab</p>
                                <p style={{ marginLeft: "10px", textAlign: "start", marginTop: "-16px", fontSize: '11px', color: "#aaa" }}>Famous travler</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#aaa", padding: "10px", marginRight: 13, borderRadius: "50%", cursor: "pointer" }}>
                            <img src={`${addfriend}`} className="addfriend" alt="" />
                        </div>
                    </div>

                </div>
                <div style={{ marginTop: "-10px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: 'flex', alignItems: "center" }}>
                            <img src={`${p4}`} className="Profileimage"></img>
                            <div>
                                <p style={{ marginLeft: "10px", textAlign: "start" }}>Sarah</p>
                                <p style={{ marginLeft: "10px", textAlign: "start", marginTop: "-16px", fontSize: '11px', color: "#aaa" }}>Famous travler</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#aaa", padding: "10px", marginRight: 13, borderRadius: "50%", cursor: "pointer" }}>
                            <img src={`${addfriend}`} className="addfriend" alt="" />
                        </div>
                    </div>

                </div>
                <div style={{ marginTop: "-10px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: 'flex', alignItems: "center" }}>
                            <img src={`${p5}`} className="Profileimage"></img>
                            <div>
                                <p style={{ marginLeft: "10px", textAlign: "start" }}>Abdul-Rahman</p>
                                <p style={{ marginLeft: "10px", textAlign: "start", marginTop: "-16px", fontSize: '11px', color: "#aaa" }}>Famous travler</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#aaa", padding: "10px", marginRight: 13, borderRadius: "50%", cursor: "pointer" }}>
                            <img src={`${addfriend}`} className="addfriend" alt="" />
                        </div>
                    </div>

                </div>


            </div>
        </div>

    )

}