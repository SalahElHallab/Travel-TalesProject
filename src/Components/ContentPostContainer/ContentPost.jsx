import React from "react";
import "./contentpost.css"
import p3 from "../../assets/p3.jpg"
import ttnav from "../../assets/Icons/ttnav.png"
import photo from "../../assets/Icons/photogallery.png"
import emoji from "../../assets/Icons/emojiIcon.png"
import video from "../../assets/Icons/videoicon.png"

export default function ContentPost(){
    return(
<div>
    <div className="ContentUploadContainer">
<div style={{display:"flex", alignItems:"center", padding:10}}>
    <img src={`${ttnav}`}  className="profileimage" alt=""></img>
    <input type="text" className="contentWritingpart" placeholder="Share your experience..."/>
</div>
<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginLeft: "-10px", padding: "10px", marginTop:"-10px" }}>
                    <div>
                        <img src={`${photo}`} className="posticons" alt="" />
                        <img src={`${emoji}`} className="posticons" alt="" />
                        <img src={`${video}`} className="posticons" alt="" />
                        </div>
                        <button 
    style={{
        marginLeft: "auto",  
        padding: "6px 20px",  
        border: "none", 
        backgroundColor:"#0077b6", 
        color: "white", 
        borderRadius: "6px", 
        cursor: "pointer",
        marginTop:"25px"
    }}
>
    Post
</button>

</div>
</div>
</div>
    )

}