import React from 'react';
import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg'
import './header.scss';
import Navlinks from './Navlinks';
import Fade from 'react-reveal/Fade';


export default function Mobile () {
  const [open,setOpen] = useState(false);
  const CloseNav = () => setOpen(!open)
  const Humberger =  <HiMenu className='humburger' 
                                     color='white' size='35px' 
                                     onClick={()=> setOpen(!open)} />
  const Close =      <CgClose       className='humburger close' 
                                     color='white' size='30px' 
                                     onClick={()=> setOpen(!open)} />
  return (
    <div >
      {
        open ? Close :  Humberger
      }
    
      
     { open && (   <div className='Mobile'>   
     <Fade > 
      <div className='left'>
       </div> 
       </Fade>
      <div ><Navlinks CloseNav={CloseNav}/></div>
     
     </div>
     )}
      
      
    </div>
  )
}
