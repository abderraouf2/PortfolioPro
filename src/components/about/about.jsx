import React from 'react';

import { Trapez,Title,Container,Text, Description,Paragraph } from './about.style';
import { CustomButtonContainer } from '../projectCard/projectCard.style'
import { Fade } from 'react-reveal';
import {Reveal} from 'react-reveal';

export default function about() {
  return (
    <Trapez id='about'>
      <Title>
      <Fade left cascade>
        About :
      </Fade>
      </Title>
      <Container>
        <Paragraph>
          01/
        </Paragraph>
        <Description>
        <Reveal effect="fadeInUp">
          <Text>
          PASSIONATE ABOUT WEB TECHNOLOGIES. I LOVE WORKING AT THE INTERSECTION OF CREATIVITY AND USER FRIENDLY INTERFACES. I CREATE MEMORABLE WEB EXPERIENCES.
          <br />
          <br />
          <br />
          IF I don't know something I won't stop until i find the solution and get the job done.
          </Text>
          <p style={{fontSize:'medium',fontWeight:'400',lineHeight:'1.32',width:'90%'}} >
          With my experience in UI and product engineering, I solve product problems and build appealing usable web experiences.
          </p>
        </Reveal>
        <h3>
          Want to know more about me ?
          <br />
          
          <CustomButtonContainer>
            CHECK OUT MY CV
          </CustomButtonContainer>
        </h3>
        
        </Description>
      </Container>
    </Trapez>
  )
}
