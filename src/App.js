import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';


import Home from './components/Home';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Sideicons from './components/Sideicons';
import './components/main.css'
import Login from './components/Login';
function App() {
  const [user, setuser] = useState(null)

  return (
    <div className="App">
      {user? 
     <> <Header/>
      <div className='main'>
        <SideBar/>
<Home/>
<Sideicons/></div></>
:<Login/>}
     
    </div>
  );
}

export default App;
