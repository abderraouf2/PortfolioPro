import React from 'react';
import './cursor.scss'

export default function Cursor({cursorX,cursorY,mouseIn,text}) {

  var display='';

  return (
    <div className="cursor" 
          {
            ...!mouseIn && (display='none')
          }
                style={{
                  display: display,
                  left: cursorX+ 'px',
                  top: cursorY+ 'px',
                }}
          >{text}
    </div>
  )
}
