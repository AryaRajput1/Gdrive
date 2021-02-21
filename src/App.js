import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';


import Home from './components/Home';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Sideicons from './components/Sideicons';
import './components/main.css'
import auth, { provider } from './firebasefile';
function App() {
  const [user, setuser] = useState('arya')
  const clickHandler = () => {
    !user && auth.signInWithPopup(provider).then(result => {
      setuser(result.user);
    })
  }
  return (
    <div className="App">
      {user ?
        <> <Header />
          <div className='main'>
            <SideBar />
            <Home />
            <Sideicons /></div></>
        : <div className='login'>
           <img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/google-drive-512.png'/>
          <button onClick={clickHandler}>Sign Up with Google</button>
        </div>}

    </div>
  );
}

export default App;
