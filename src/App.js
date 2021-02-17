import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Sideicons from './components/Sideicons';
import './components/main.css'
function App() {
  return (
    <div className="App">
      <Header/>
      <div className='main'>
        <SideBar/>
<Home/>
<Sideicons/></div>

     
    </div>
  );
}

export default App;
