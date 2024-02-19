import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Accounts from "./pages/Accounts/accounts";
import Header from './components/Header';
import Purchases from "./pages/Purchases/purchases";
import sessions from "./pages/Sessions/sessions";
import footer from "./components/Footer/Footer";
import sidebar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <div>
      < Accounts />
      <BrowserRouter>
        <Header logo="Finexo" />
        <Routes>
          <Route path="/" element={<Accounts />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/sessions" element={<sessions />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;