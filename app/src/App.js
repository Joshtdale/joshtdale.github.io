import { useState, useEffect } from 'react'
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Portfolio from './Portfolio';
import Blog from './Blog';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {


  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/portfolio' element={<Portfolio />}/>
          <Route path='/blog' element={<Blog />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
