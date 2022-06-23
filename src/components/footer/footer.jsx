import React from 'react';
import { Footer,A } from './footer.style';
import { Title } from '../about/about.style';
import { Fade } from 'react-reveal';
import SkillIcon from '../../icons/skillIcon';
import { Icons1 } from '../skills/skills.style';
import { icons } from './icons';



export default function footer() {
  return (
    <Footer id='contact'>
      <Title>
        <Fade>
         You can find me on :
        </Fade>
      </Title>
      <Icons1>
        {
          icons.map(icon=><A href={icon.to}> <SkillIcon image={icon.icon} title={icon.title} /></A> )
        }
      </Icons1>
        {/* <a href="https://react-icons.github.io/react-icons/search?q=close" class="fa fa-twitter"></a>  */}
    </Footer>
  )
}
