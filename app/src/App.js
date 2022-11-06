import { useState } from 'react'
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Portfolio from './Portfolio';
import Blog from './Blog';

function App() {

  const [page, setPage] = useState('Home')

  return (
    <div>
      <Navbar setPage={setPage}/>
      {page == 'Home' && <Home />}
      {page == 'Portfolio' && <Portfolio />}
      {page == 'Blog' && <Blog />}
    </div>
  );
}

export default App;
