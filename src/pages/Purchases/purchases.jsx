import { getAllByDisplayValue } from "@testing-library/react";
import React from "react";

const Purchases = () => {
    return(
        <div style={{ margin: "30px", backgroundImage: "./purchases.webp" }}>
        <div>
            <h1 style={{ textAlign: "center" }}>
                <span style={{ color: "#00bbf0" }}>Purchases </span>


            </h1>
        </div>

        <div style={{ textAlign: "center" }}>
            <img style={{ height: "100px", }} src="./purchases.webp" alt="" />
            <h3 >Expert Management</h3>
            <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

        <div style={{ textAlign: "center" }}>
            <img style={{ height: "100px", }} src="./w2.png" alt="" />
            <h3 >Secure Investment</h3>
            <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

        <div style={{ textAlign: "center" }}>
            <img style={{ height: "100px", }} src="./w3.png" alt="" />
            <h3 >Instant Trading</h3>
            <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

        <div style={{ textAlign: "center" }}>
            <img style={{ height: "100px", }} src="./w4.png" alt="" />
            <h3 >Happy Customers</h3>
            <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

        <div style={{ textAlign: "center" }}>
            <button style={{ padding: "10px", backgroundColor: "#00bbf0", color: "white", border: "none", cursor: "pointer" }}>Read More</button>
        </div>
    </div>
    )
}

export default Purchases;