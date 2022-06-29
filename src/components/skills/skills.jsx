import React from 'react';
import { icons } from './icons-data';
import { SkillCard,SkillComponent,Icons1 } from './skills.style';
import SkillIcon from '../../icons/skillIcon';


export default function skills() {
  return (
    
      <SkillComponent>
        <SkillCard>
          <Icons1>  
          {
            icons.filter((icon,index)=> icon.id<5)
            .map((icon)=>(<SkillIcon image={icon.logo} title={icon.title.toUpperCase()} />))
          }
          </Icons1>
          <Icons1> 
           {
            icons.filter((icon,index)=> 4<icon.id)
            .map((icon)=>(<SkillIcon image={icon.logo} title={icon.title.toUpperCase()} />))
            }
          </Icons1>
        </SkillCard>
      </SkillComponent>
  )
}
