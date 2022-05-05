import React from 'react';
import Cabecalho from './components/Cabecalho';
import './App.css';
import Home from './components/pages/Home'; 
import Rodape from './components/Rodape';
import { BrowserRouter as Router, Routes, Switch, Route } from 'react-router-dom';
import FAQ from './components/pages/FAQ';
import PlaylistPage from './components/pages/Playlists';
import SignUp from './components/pages/SignUp'; 
import Playlistdetail from './components/pages/playlistdetail';
import Login from './components/pages/Login'; 
import Profile from './components/pages/Profile'; 
import Change from './components/pages/Change';
import { useState } from 'react';
function App() { 
  const [isLogged,setIsLogged]=useState(false)
  return (
    <>
      <Router>
        <Cabecalho isLogged={isLogged} setIsLogged={setIsLogged} />
        <Routes>
          <Route path='/' exact element={<Home isLogged={isLogged} setIsLogged={setIsLogged} />} />
          <Route path='/FAQ' element={<FAQ  isLogged={isLogged}/>} />
          <Route path='/sign-up' element={<SignUp isLogged={isLogged} />} />
          <Route path='/Playlists' element={<PlaylistPage isLogged={isLogged} />}/>
          <Route path='/playlistdetail/:id'  element={<Playlistdetail isLogged={isLogged} />} />
          <Route path='/Login'  element={<Login setIsLogged={setIsLogged} isLogged={isLogged} />}/> 
          <Route path='/Profile' element={<Profile/>} />
          <Route path='/Change/:id' element={<Change/>} />
        </Routes> 
        <Rodape />
      </Router>
    </>
  );
}

export default App;
