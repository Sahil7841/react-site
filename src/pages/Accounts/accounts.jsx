import { getAllByDisplayValue } from "@testing-library/react";
import React from "react";
import ComB from "../../ComB";
import ComC from "../../ComC";
import { TextFieldProvider } from '../../TextFieldContext';

const Accounts = () => {
    return (
        <div style={{ padding: "30px", backgroundColor: "#525f7f", color: "white" }} >
            <div>
                <h3 style={{ textAlign: "center" }}>
                    Accounts
                </h3>
                <p style={{ textAlign: "center" }}>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                </p>
            </div>

            <div style={{ display: "flex" }}>
                <img style={{ height: "500px" }} src="./about-img.png" alt="" />

                <div>
                    <h2>We Are Finaxo</h2>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </p>
                    <button style={{ padding: "10px", backgroundColor: "#00bbf0", color: "white", border: "none", cursor: "pointer" }}>Read More</button>
                </div>
            </div>
            <TextFieldProvider>
                <ComC />
                <ComB />
            </TextFieldProvider>
        </div>
    )
}

export default Accounts;