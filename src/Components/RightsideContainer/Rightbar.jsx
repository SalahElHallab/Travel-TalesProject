import React from "react";
import "./rightbar.css";
import img from "../../assets/travelworld.jpg"
import image1 from "../../assets/Icons/ttnav.png"
import addfriend from "../../assets/Icons/addfriend.svg"
import p1 from "../../assets/p1.jpg"
import p2 from "../../assets/p2.jpg"
import p3 from "../../assets/p3.jpg"
import p4 from "../../assets/p4.jpg"
import p5 from "../../assets/p5.jpeg"

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

                <h3 style={{textAlign:"start", marginLeft:"10px"}}>Popular Tourist</h3>
                    <div style={{marginTop:"-10px"}}>
                        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                            <div style={{display:'flex', alignItems:"center"}}>
                                <img src={`${image1}`} className="Profileimage"></img>
                            <div>
                                <p style={{ marginLeft: "10px" , textAlign:"start" }}>Salah</p>
                                <p style={{ marginLeft: "10px" , textAlign:"start", marginTop:"-16px", fontSize:'11px',color:"#aaa" }}>Famous travler</p>
                            </div>
                            </div>
                            <div style={{backgroundColor:"#aaa", padding:"10px",  marginRight:13, borderRadius:"50%"}}>
                              <img src={`${addfriend}`}className="addfriend" alt="" />  
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop:"-10px"}}>
                        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                            <div style={{display:'flex', alignItems:"center"}}>
                                <img src={`${p1}`} className="Profileimage"></img>
                            <div>
                                <p style={{ marginLeft: "10px" , textAlign:"start" }}>Sam</p>
                                <p style={{ marginLeft: "10px" , textAlign:"start", marginTop:"-16px", fontSize:'11px',color:"#aaa" }}>Famous travler</p>
                            </div>
                            </div>
                            <div style={{backgroundColor:"#aaa", padding:"10px",  marginRight:13, borderRadius:"50%"}}>
                              <img src={`${addfriend}`}className="addfriend" alt="" />  
                            </div>
                        </div>
                        
                    </div>
                    <div style={{marginTop:"-10px"}}>
                        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                            <div style={{display:'flex', alignItems:"center"}}>
                                <img src={`${p3}`} className="Profileimage"></img>
                            <div>
                                <p style={{ marginLeft: "10px" , textAlign:"start" }}>Ahmed</p>
                                <p style={{ marginLeft: "10px" , textAlign:"start", marginTop:"-16px", fontSize:'11px',color:"#aaa" }}>Famous travler</p>
                            </div>
                            </div>
                            <div style={{backgroundColor:"#aaa", padding:"10px",  marginRight:13, borderRadius:"50%"}}>
                              <img src={`${addfriend}`}className="addfriend" alt="" />  
                            </div>
                        </div>
                        
                    </div>
                    <div style={{marginTop:"-10px"}}>
                        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                            <div style={{display:'flex', alignItems:"center"}}>
                                <img src={`${p2}`} className="Profileimage"></img>
                            <div>
                                <p style={{ marginLeft: "10px" , textAlign:"start" }}>Wahab</p>
                                <p style={{ marginLeft: "10px" , textAlign:"start", marginTop:"-16px", fontSize:'11px',color:"#aaa" }}>Famous travler</p>
                            </div>
                            </div>
                            <div style={{backgroundColor:"#aaa", padding:"10px",  marginRight:13, borderRadius:"50%"}}>
                              <img src={`${addfriend}`}className="addfriend" alt="" />  
                            </div>
                        </div>
                        
                    </div>
                    <div style={{marginTop:"-10px"}}>
                        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                            <div style={{display:'flex', alignItems:"center"}}>
                                <img src={`${p4}`} className="Profileimage"></img>
                            <div>
                                <p style={{ marginLeft: "10px" , textAlign:"start" }}>Sarah</p>
                                <p style={{ marginLeft: "10px" , textAlign:"start", marginTop:"-16px", fontSize:'11px',color:"#aaa" }}>Famous travler</p>
                            </div>
                            </div>
                            <div style={{backgroundColor:"#aaa", padding:"10px",  marginRight:13, borderRadius:"50%"}}>
                              <img src={`${addfriend}`}className="addfriend" alt="" />  
                            </div>
                        </div>
                        
                    </div>
                    <div style={{marginTop:"-10px"}}>
                        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                            <div style={{display:'flex', alignItems:"center"}}>
                                <img src={`${p5}`} className="Profileimage"></img>
                            <div>
                                <p style={{ marginLeft: "10px" , textAlign:"start" }}>Abdul-Rahman</p>
                                <p style={{ marginLeft: "10px" , textAlign:"start", marginTop:"-16px", fontSize:'11px',color:"#aaa" }}>Famous travler</p>
                            </div>
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