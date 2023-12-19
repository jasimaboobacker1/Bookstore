// ContextShare.js
import React, { createContext, useState } from 'react';

export const addcontext = createContext();

function ContextShare({ children }) {
  const [addthings, setaddthings] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const value = {
    selectedBook,
    setSelectedBook,
  };

  
  

  return (
    <addcontext.Provider value={{ addthings, setaddthings,value }}>
      {children}
    </addcontext.Provider>
  );
}

export default ContextShare;
