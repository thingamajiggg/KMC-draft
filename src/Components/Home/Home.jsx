import React from 'react'
import Hero from '../Hero/Hero'
import Title from '../Title/Title';
import Services from '../Services/Services';
import About from '../About/About';


const Home = () => {
  return (
    <div>
        <Hero/>
        <div className="container">
         <Title subTitle='Our Services' title='What We Offer'/>
         <Services/>
         <About/>
         <Title subTitle='Gallery' title='Company photo'/>
     </div>
    </div>
  )
}

export default Home
