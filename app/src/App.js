// import { useState, useEffect } from 'react'
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';
import About from './About';
import { Route, Routes } from "react-router-dom";

function App() {


  return (
    <div>
      <Navbar />
      {/* <Router> */}
      <Routes>
        <Route
          exact
          path='/'
          element={<Home/>}
        />
        <Route
          exact
          path='/portfolio'
          element={<Portfolio/>}
        />
        <Route
          exact
          path='/contact'
          element={<Contact />}
        />
        <Route
          exact
          path='/blog/*'
          element={<Blog/>}
        />
        <Route
          exact
          path='/about'
          element={<About/>}
        />
        
      </Routes>
      

      {/* </Router> */}

    </div>
  );
}

export default App;
