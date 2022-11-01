import { useState } from 'react'
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {

  const [page, setPage] = useState('Home')

  return (
    <div>
      <Navbar setPage={setPage}/>
      {page == 'Home' && <Home />}
    </div>
  );
}

export default App;
