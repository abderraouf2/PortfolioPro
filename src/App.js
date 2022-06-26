import { useEffect, useState } from 'react';
import './App.css';

import Top from './components/top/top';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import Footer from './components/footer/footer';
import Loader from'./components/loader/Loader'



function App() {
  const [loader,setLoader] = useState(true);
  const [loadded, setloadded] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setLoader(false);
    }, 5000)
  },[])
  return !loadded ? (
    <Loader />
  ) 
  
  : (
        <div className='app'>
            <Top setloadded={setloadded} />
            <About />
            <Projects />
            <Footer /> 
            {/* 
            <Skills />
          */}
        </div>
      
  );
}

export default App;
