import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link, useNavigate } from 'react-router-dom';
import './Cabecalho.css';
import axios from 'axios';

function Cabecalho(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const isLogged=props.isLogged
  const navigate=useNavigate()  
  const [currentUser,setCurrentUser]=useState({}) 
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton(); 
  }, []);  


  function doit() {  
    props.setIsLogged(false) 
    navigate("/Login")
  }


  window.addEventListener('resize', showButton);

  if(isLogged) { 

    axios.get("http://localhost:5000/currentUser").then( (res) => { 
        setCurrentUser(res.data)
    }) 
    return (
      <>
        <nav className='Cabecalho'>
          <div className='Cabecalho-container'>
            <Link to='/' className='Cabecalho-logo' onClick={closeMobileMenu}>
              Spotifly
              <i className='fab fa-typo3' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                    to='/FAQ'
                    className='nav-links'
                    onClick={closeMobileMenu}
                >
                  FAQ
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                    to='/Playlists'
                    className='nav-links'
                    onClick={closeMobileMenu}
                >
                  Playlists
                </Link>
              </li> 
              <li className='nav-item'>
                  <span className='nav-links' onClick={doit}>Logout</span>
              </li> 
              <li className='nav-item'>
              <Link
                    to='/Profile'
                    className='nav-links'
                    onClick={closeMobileMenu}
                >
                  {currentUser.name}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
  ); 
  } 
  else { 
    return (
        <>
          <nav className='Cabecalho'>
            <div className='Cabecalho-container'>
              <Link to='/' className='Cabecalho-logo' onClick={closeMobileMenu}>
                Spotifly
                <i className='fab fa-typo3' />
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                      to='/FAQ'
                      className='nav-links'
                      onClick={closeMobileMenu}
                  >
                    FAQ
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                      to='/Playlists'
                      className='nav-links'
                      onClick={closeMobileMenu}
                  >
                    Playlists
                  </Link>
                </li> 
                <li className='nav-item'>
                  <Link
                      to='/Login'
                      className='nav-links'
                      onClick={closeMobileMenu}
                  >
                    Login
                  </Link>
                </li>
              </ul>
              {button && <Button buttonStyle='btn--outline'>Cadastre-se</Button>}
            </div>
          </nav>
        </>
    ); 
  }
}

export default Cabecalho;
