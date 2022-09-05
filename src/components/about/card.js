
import React from 'react'
import './about.scss'
export default function Card({title, subtitle, icon}) {
  return (
    
      <div className='aboutCard'>
        <div className='wrapper'>
          <div>
            <h4>{title}</h4>
            <p>{subtitle}</p>
          </div>  
          <div className='IconCard' >
            {icon}
          </div>
        </div>
      </div>
  )
}
