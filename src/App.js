import React from "react";
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Components/Home/Home'
import AboutPage from "./Components/AboutPage/AboutPage";
import Services from "./Components/ServicePage/ServicePage";
import Product from "./Components/Product/ProductPage"

const App = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/KMC-draft' element={<Home/>}/>
                <Route path='/aboutUs' element={<AboutPage category = "aboutUs" />}/>
                <Route path='/Services' element={<Services category = "Service" />}/>
                <Route path='/Products' element={<Product category = "Product" />}/>
            </Routes>
        </Router>
    )
}

export default App
