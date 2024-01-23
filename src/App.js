// App.js
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Resources from './components/Resources';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <BrowserRouter>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}  />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          {/* Add more routes for other pages */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;