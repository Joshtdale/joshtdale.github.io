import { useState, useEffect } from 'react'
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Portfolio from './Portfolio';
import Blog from './Blog';

function App() {

  // const [page, setPage] = useState('Home')

  const [page, setPage] = useState((() => {
    return JSON.parse(localStorage.getItem("state")) || 'Home';
}))

useEffect(() => {
    localStorage.setItem('state', JSON.stringify(page))
}, [page]);



  return (
    <div>
      <Navbar setPage={setPage}/>
      {page === 'Home' && <Home />}
      {page === 'Portfolio' && <Portfolio />}
      {page === 'Blog' && <Blog />}
    </div>
  );
}

export default App;
