import React from 'react';
import Top from '../components/top/top';
import About from '../components/about/about';
import Projects from '../components/projects/projects';
import Footer from '../components/footer/footer';
import './AboutMe/AboutMe.scss'
export default function Home() {
  return (
    <div className='homePage'>
            <Top />
            <About />
            <Projects />
            <Footer /> 
    </div>
  )
}
