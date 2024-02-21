import React, { createContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Accounts from "./pages/Accounts/accounts";
import Header from './components/Header';
import Purchases from "./pages/Purchases/purchases";
import Sessions from "./pages/Sessions/index";
import {Footer} from "./components/Footer/index";
import ComA from "./ComA";
// import sidebar from "./components/Sidebar/Sidebar";

const FirstName = createContext(); 

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header logo="Finexo" />
        <Routes>
          <Route path="/" element={<Accounts />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/Sessions" element={<Sessions />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      {/* <FirstName.Provider value={"Sahil"}> <ComA /></FirstName.Provider> */}
    </div>
  )
}

export default App;
// export { FirstName };