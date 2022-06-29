import { useEffect, useState } from 'react';
import './App.css';
import { Switch,Route } from "react-router-dom";

import Loader from'./components/loader/Loader'
import Home from './pages/Home';
import AboutMe from './pages/AboutMe/AboutMe';



function App() {
  // const [loadded, setloadded] = useState(false);
  const [loader,setLoader] = useState(true);
  // const ImgLoadded = () =>{
  //   setloadded(true)
  // }
  useEffect(()=>{
      setTimeout(()=>{
        setLoader(false)
      },4)
  },[])
  return loader ? (
    <Loader />
  ) 
  
  : (
        <div className='app'>
          <Switch>
            <Route exact path='/' >
            <Home /> 
            </Route>
            <Route exact path='/about' >
            <AboutMe /> 
            </Route>
          </Switch>
            {/* 
            <Skills />
          */}
        </div>
      
  );
}

export default App;
