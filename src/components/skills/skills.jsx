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
            icons.map((icon)=>(<SkillIcon key={icon.id} image={icon.logo} />))
          }
          </Icons1>
          
        </SkillCard>
      </SkillComponent>
  )
}
