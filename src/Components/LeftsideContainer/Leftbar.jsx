import React from "react";
import "./leftbar.css";

export default function Leftbar() {
    return (
        <div className="Leftbar">
            <div className="NotificationContainer">

                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <p>Notifications</p>
                    <p style={{ color: "#aaa" }}>See all</p>
                </div>
            </div>


        </div>
    )

}