import React from "react";
import Navbar from './Components/Navbar/Navbar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './Components/Home/Home'
import Hero from "./Components/Hero/Hero"
import Services from "./Components/Services/Services";
import Title from "./Components/Title/Title";

const App = () => {
  return (
    // <div>
    //   <Navbar/>
    //   <Hero/>
    //   <div className="container">
    //     <Title subTitle='Our Services' title='What We Offer'/>
    //     <Services/>
    //   </div>
    // </div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coatingServices' element={<Services category="coatingService"/>}/>
      </Routes>
    </Router>
  )
}

export default App
