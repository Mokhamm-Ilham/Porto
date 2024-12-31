import About from './About/About'
import Hero from './Hero/Hero'
import React from 'react'
import Skills from './Skills/Skills'
import Blog from './Blog/Blog'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <Hero />
            <About/>
            <Skills/>
            <Blog/>
            <Contact/>
        </div>
    )
}

export default Home