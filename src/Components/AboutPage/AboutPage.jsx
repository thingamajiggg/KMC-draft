import React from 'react'
import './AboutPage.css'
import AboutTitle from './AboutTitle'
import AboutHead from './AboutHead'
import AboutDescription from './AboutDescription'
import CompanyPhoto from '../CompanyPhoto/CompanyPhoto'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'

const AboutPage = () => {
    return (
        <div>
            <AboutHead/>
            <div className="container">
                <AboutDescription/>
                <AboutTitle subTitle='More about our company' title='Company photo'/>
                <CompanyPhoto/>
                <Contact/>
                <Footer/>
            </div>
        </div>
    )
}

export default AboutPage
