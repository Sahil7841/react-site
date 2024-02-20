import React from "react";

export const Footer =() => {
 return (
    <div style={{display:"flex" , justifyContent:"space-around" , backgroundColor:"#00204a" , color:"white"}}>
        <div style={{display:"grid"}}>
            <h3>Address</h3>
            <i className="fa fa-map-marker"></i>
            <span>Location</span>
            <span>Call</span>
            <span>mail@domain.com</span>
        </div>
        <div> 
            <h3>Info</h3> 
        </div>
        <div style={{display:"grid" }}>
            <h3>Links</h3>
            <span>Home</span>
            <span>About</span>
            <span>Services</span>
            <span>Help</span>
            <span>Why Us</span>

        </div>
        <div> 
            <h3>Subscribe</h3>
            <button style={{ padding: "10px", backgroundColor: "#00bbf0", color: "white", border: "none", cursor: "pointer" }}>Subscribe</button>
        </div>
    </div>
 )
}