import React, { createContext, useState, useContext } from 'react';

const TextFieldContext = createContext();

export const TextFieldProvider = ({ children }) => {
  const [text, setText] = useState('');

  const updateText = (newText) => {
    setText(newText);
  };

  return (
    <TextFieldContext.Provider value={{ text, updateText }}>
      {children}
    </TextFieldContext.Provider>
  );
};

export const useTextField = () => {
  return useContext(TextFieldContext);
};
