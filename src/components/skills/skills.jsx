import React from 'react';
import { icons } from './icons-data';
import { SkillCard,SkillPage,SkillComponent,Title,Icons1 } from './skills.style';
import SkillIcon from '../../icons/skillIcon';


export default function skills() {
  return (
    
    <SkillPage>
      <Title>Skills</Title>
      <SkillComponent>
        <SkillCard>
          <Icons1>  
          {
            icons.filter((icon,index)=> icon.id<4)
            .map((icon)=>(<SkillIcon image={icon.logo} title={icon.title} />))
          }
          </Icons1>
          <Icons1> 
           {
            icons.filter((icon,index)=> 3<icon.id)
            .map((icon)=>(<SkillIcon image={icon.logo} title={icon.title} />))
            }
          </Icons1>
        </SkillCard>
      </SkillComponent>
    </SkillPage>
  )
}
