import { getAllByDisplayValue } from "@testing-library/react";
import React from "react";

const Sessions = () => {
    return(
        <div style={{ margin: "30px" }}>
        <div>
            <h1 style={{ textAlign: "center" }}>Our
                <span style={{ color: "#00bbf0" }}> Services </span>
            </h1>
            <p style={{ textAlign: "center" }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
            </p>
        </div>
        
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        
            <div className="card" style={{ backgroundColor: "#f8f8f9", width: "30%", padding: "10px", textAlign: "center" }}>
                <img style={{ width: "100px", justifyContent: "center" }} src="./s1.png" alt="" />
                <h3 >CURRENCY WALLET</h3>
                <p >fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
            </div>
        
            <div className="card1" style={{ backgroundColor: "#f8f8f9", width: "30%", padding: "10px", textAlign: "center" }}>
                <img style={{ width: "100px" }} src="./s2.png" alt="" />
                <h3 >SECURITY STORAGE</h3>
                <p >fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
        
            </div>
        
            <div className="card2" style={{ backgroundColor: "#f8f8f9", width: "30%", padding: "10px", textAlign: "center" }}>
                <img style={{ width: "100px" }} src="./s3.png" alt="" />
                <h3 >EXPERT STORAGE</h3>
                <p> fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
        
            </div>
        
        </div>
        
        <div style={{ textAlign: "center" , marginTop:"20px"}}>
            <button style={{ padding: "10px", backgroundColor: "#00bbf0", color: "white", border: "none" , width:"10%" , cursor:"pointer" }}>View All</button>
        </div>
        </div>
    )
}

export default Sessions;