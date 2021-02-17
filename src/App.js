import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Sideicons from './components/Sideicons';

function App() {
  return (
    <div className="App">
      <Header/>
      <SideBar/>
<Home/>
<Sideicons/>

     
    </div>
  );
}

export default App;
