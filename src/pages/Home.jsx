import React from 'react';
import Top from '../components/top/top';
import About from '../components/about/about';
import Projects from '../components/projects/projects';
import Footer from '../components/footer/footer';

export default function Home() {
  return (
    <div>
            <Top />
            <About />
            <Projects />
            <Footer /> 
    </div>
  )
}
