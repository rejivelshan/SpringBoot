//  import './App.css';
 import './input.css';
import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Signup from "./components/Signup";
import LoginPage from "./components/LoginPage";
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import NavBar from './components/Navbar';

function App() {
  return (
<div className="App">
<Router>

        <Routes>
          <Route exact path="/" element={<LoginPage/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/product' element={<Product />}></Route>
          </Routes>
    </Router>
    </div>
  );
}


export default App;
