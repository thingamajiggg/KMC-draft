import React from "react";
import Navbar from './Components/Navbar/Navbar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './Components/Home/Home'
import AboutPage from "./Components/AboutPage/AboutPage";
import Services from "./Components/ServicePage/ServicePage";

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
        <Route path='/aboutUs' element={<AboutPage category="aboutUs"/>}/>
        <Route path='/Services' element={<Services category="Service"/>}/>
      </Routes>
    </Router>
  )
}

export default App
