import React from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg'
import './header.scss';
import Navlinks from './Navlinks';
import { useState } from 'react';


export default function Mobile () {
  const [open,setOpen] = useState(false);
  const CloseNav = () => setOpen(!open)
  const Humberger =  <BiMenuAltRight className='humburger' 
                                     color='black' size='40px' 
                                     onClick={()=> setOpen(!open)} />
  const Close =      <CgClose       className='humburger' 
                                     color='black' size='40px' 
                                     onClick={()=> setOpen(!open)} />
  return (
    <div className='Mobile'>
      {
        open ? Close :  Humberger
      }
     
     { open && ( <Navlinks CloseNav={CloseNav}/>)}
    </div>
  )
}
