import React, { useState } from "react";
import "./post.css"
import profilepic from "../../assets/Icons/ttnav.png"
import paristpost from "../../assets/parispost.jpg"
import likeicon from "../../assets/Icons/likeicon.png"
import comment from "../../assets/Icons/commenticon.svg"
import share from "../../assets/Icons/shareicon.svg"
import options from "../../assets/Icons/optionsicon.svg"
import activelike from "../../assets/Icons/activelike.png"
import addcomment from "../../assets/Icons/addcomment.png"

export default function Post() {
    const [Like, setLike] = useState(likeicon);
    const [count, setCount] = useState(0);
    const [Comments, setComments] = useState([]);
    const [commentwriting, setcommentwriting] = useState("");
    const [show, setshow] = useState(false);

    const handleLike = () => {
        if (Like === likeicon) {
            setLike(activelike);
            setCount(count + 1);
        }
        else {
            setLike(likeicon);
            setCount(count - 1);
        }
    }

    const addComment = () => {
        const comment = {
            "id": "61fsbf23123123123123",
            "username": "salah",
            "title": `${commentwriting}`,
        };
        setComments(Comments.concat(comment));
    }

    const handleComment = () => {
        addComment();
    }

    console.log(Comments);

    const handleshowcomments = () => {
        if (show === false) {
            setshow(true);
        } else {
            setshow(false);
        }
    }

    return (
        <div className="PostContainer">
            <div className="SubPostContainer">
                <div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={`${profilepic}`} className="PostImage" alt="" />
                        <div>
                            <p style={{ marginLeft: "5px", textAlign: "start" }}>Salah</p>
                            <p style={{ fontSize: "11px", textAlign: 'start', marginLeft: 5, marginTop: -13, color: "#aaa" }}>Paris,France</p>
                        </div>

                        <img src={`${options}`} className="moreicon" />
                    </div>
                    <p style={{ textAlign: "start", width: "96%", marginLeft: 10, marginTop: 0 }}>Finally made it to Paris!  The Eiffel Tower is even more breathtaking in person.  Spent the day wandering through the Louvre and indulging in some delicious pastries.  Any recommendations for hidden gems in the city? #Paris #France #EiffelTower #Louvre #Travelgram #Explore</p>
                    <img src={`${paristpost}`} className="PostImages" alt="" />
                    <div style={{ display: "flex" }}>
                        <div style={{ display: "flex", marginLeft: "10px" }}>
                            <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                <img src={`${Like}`} className="iconforPost" onClick={handleLike} />
                                <p style={{ marginLeft: "5px" }}>{count} Likes</p>
                            </div>
                            <div style={{ display: "flex", marginLeft: 20, cursor: "pointer", alignItems: "center" }}>
                                <img src={`${comment}`} className="iconforPost" onClick={handleshowcomments} />
                                <p style={{ marginLeft: "5px" }}>5 Comments</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", marginLeft: 250, cursor: "pointer", alignItems: "center" }}>
                            <img src={`${share}`} className="iconforPost" />
                            <p style={{ marginLeft: "5px" }}>Share</p>
                        </div>

                    </div>
                    {show === true ?
                        <div>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src={`${profilepic}`} className="PostImage" alt="" />
                                {/* <p style={{marginLeft:"6px"}}>Salah</p> */}
                                <input type="text" className="commentinput" placeholder="Write your thoughts" onChange={(e) => setcommentwriting(e.target.value)} />
                                <button className="addCommentbtn" onClick={handleComment}><img style={{ width: "25px" }} src={`${addcomment}`} /></button>
                            </div>

                            {Comments.map((item) => (
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        maxWidth: "100%",
                                        marginTop: "8px",
                                    }}
                                >
                                    <img src={`${profilepic}`} className="PostImage" alt="" />
                                    <div
                                        style={{
                                            maxWidth: "calc(100% - 50px)",
                                            wordBreak: "break-word",
                                        }}
                                    >
                                        <p style={{ margin: 0, fontWeight: "bold", fontSize: "14px" }}>{item.username}</p>
                                        <p style={{ margin: 0, color: "#111", fontSize: "15px", marginTop: "-2px" }}>{item.title}</p>
                                        <p
                                            style={{
                                                margin: "2px 0",
                                                color: "#666",
                                                fontSize: "12px",
                                                cursor: "pointer",
                                                marginTop: "2px",
                                            }}
                                            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
                                            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
                                        >
                                            Reply
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div> : ""
                    }
                </div>
            </div>

        </div>
    )
}