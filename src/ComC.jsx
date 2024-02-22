import React from 'react';
import { useTextField } from './TextFieldContext';
// import { FirstName } from "./App";
const ComC = () => {
    const { text, updateText } = useTextField();

    const handleChange = (event) => {
        updateText(event.target.value);
    };

    return (
        <div>
            <label htmlFor="">Component C</label>
            <input
                type="text"
                value={text}
                onChange={handleChange}
                style={{
                    padding: '10px',
                    fontSize: '16px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    width: '100%',
                    boxSizing: 'border-box',
                    marginTop: '5px',
                    marginBottom: '5px',    
                }}
            />
        </div>
    );
};
export default ComC;