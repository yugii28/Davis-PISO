import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { Nav, NavLink } from 'react-bootstrap';
import Home from "./Components/Pages/Home";
import JoinUs from "./Components/Pages/JoinUs";
import Contact from "./Components/Pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <div className='pages'>
          <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/contact" element = {<Contact/>}/>
            <Route path = "/joinus" element = {<JoinUs/>}/>
          </Routes>
        </div>
      </Router>
      
     </>
  ); 
}

export default App;
