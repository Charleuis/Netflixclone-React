import React from 'react';
import NavBar from './Components/Navbar/NavBar';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {Orginals,Action} from './urls'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={Orginals} title='Netflix Orginals'/>
      <RowPost url={Action} title='Action' isSmall/>
    </div>
  );
}

export default App;
