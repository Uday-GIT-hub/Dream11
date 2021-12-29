import React from 'react'
import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import './App.css';

import Home from './components/pages/Home'
import About from './components/pages/About'
import News from './components/pages/News'
import Contact from './components/pages/Contact'
import Demo from './components/pages/Demo'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/demo" element={<Demo/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
