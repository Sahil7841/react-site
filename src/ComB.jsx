import React from 'react';
import { useTextField } from './TextFieldContext';
import ComC from "./ComC";
const ComB = () => {
    const { text,updateText } = useTextField();

    return (
        <div>
            <label htmlFor="">Component B</label>
            <input type="text" onChange={(e) => updateText(e.target.value)} value={text} style={{
                padding: '10px',
                fontSize: '16px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                width: '100%',
                boxSizing: 'border-box',
                marginTop: '5px',
                marginBottom: '5px',
            }} />
        </div>
    );
};
export default ComB;