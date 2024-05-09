import React, {useState} from 'react'
import './ProductPage.css'
import ProductHead from './ProductHead'
import Footer from '../../Components/Footer/Footer'
import Contact from '../Contact/Contact'
import ProductFilter from './ProductFilter'

const ProductPage = () => {
    return (
        <div>
            <ProductHead/>
            <div className="container">
                <ProductFilter/>
                <Contact/>
                <Footer/>
            </div>
        </div>
    )
}

export default ProductPage
