import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Accounts from "./pages/Accounts/accounts";
import Header from './components/Header';
import Purchases from "./pages/Purchases/purchases";
import Sessions from "./pages/Sessions/index";
import {Footer} from "./components/Footer/index";
// import sidebar from "./components/Sidebar/Sidebar";
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
    </div>
  )
}

export default App;