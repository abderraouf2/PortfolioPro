import React from 'react';

import Card from './card';
import './about.scss'
import { AiOutlineTeam } from 'react-icons/ai';
import { BsCreditCardFill } from 'react-icons/bs';
import { MdSupportAgent } from 'react-icons/md'
export default function WhyMe() {
  return (
    <div style={{backgroundColor:'#1414147f',width:'100vw',height:'90vh',paddingTop:'15px'}}>
      <div className='whyMe'>
        <h2 className='main-title'>
          why choose me
        </h2>
          <div className='cardWrapper'>
              <Card title="professionnel and dedicated team " subtitle="build websites with modern technologies" icon={<AiOutlineTeam size='40px'/>} />
              <Card title="affordable and flexible" subtitle="get the best website for a good price" icon=      {<BsCreditCardFill size='40px' />} />
              <Card title="24/7 support" subtitle="Consulting solutions and make plan to renovation" icon={<MdSupportAgent size='40px' />} />
          </div>
        </div>
        <div className='clientsWrapper' style={{backgroundColor:'#141414'}}>  
      <div className='clients'>
      </div>
      </div>
    </div>
  )
}
