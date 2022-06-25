
import './App.css';

import Top from './components/top/top';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import Footer from './components/footer/footer';



function App() {
  return (
        <div className='app'>
            <Top />
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
