import React from 'react'
import Hero from '../Hero/Hero'
import Title from '../Title/Title';
import Services from '../Services/Services';
import About from '../About/About';
import CompanyPhoto from '../CompanyPhoto/CompanyPhoto';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Hero/>
            <div className="container">
                <Title subTitle='Our Services' title='What We Offer'/>
                <Services/>
                <About/>
                <Title subTitle='Gallery' title='Company photo'/>
                <CompanyPhoto/>
                <Title subTitle='Contact Us' title='Get in Touch'/>
                <Contact/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home
