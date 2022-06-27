import { useEffect, useState } from 'react';
import './App.css';


import Loader from'./components/loader/Loader'
import Home from './pages/Home';




function App() {
  // const [loadded, setloadded] = useState(false);
  const [loader,setLoader] = useState(true);
  // const ImgLoadded = () =>{
  //   setloadded(true)
  // }
  useEffect(()=>{
      setTimeout(()=>{
        setLoader(false)
      },5000)
  },[])
  return loader ? (
    <Loader />
  ) 
  
  : (
        <div className='app'>
          
            <Home /> 
           
            {/* 
            <Skills />
          */}
        </div>
      
  );
}

export default App;
