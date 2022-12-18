// import { useState, useEffect } from 'react'
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';
import About from './About';
import { Route, Routes } from "react-router-dom";
import BlogTemplate from './blogs/BlogTemplate';
import blogList from './BlogList'

function App() {
// console.log(blogList)

  return (
    <>
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
        >
          {/* <Route path='blog1' element={<BlogTemplate blogList={blogList[0]}  />} />  */}
        </Route>
        <Route
          exact
          path='/about'
          element={<About/>}
        />
        
      </Routes>
      

      {/* </Router> */}

    </>
  );
}

export default App;
