import React from 'react';

import { Trapez,Container,Text, Description,Paragraph } from './about.style';
import { CustomButtonContainer } from '../projectCard/projectCard.style'
// import  Fade  from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

export default function about() {
  return (
    <Trapez id='about'>
      <Container>
        <Paragraph>
          01/
        </Paragraph>
        <Description>
          <Text>
            <Slide bottom>
              PASSIONATE ABOUT WEB TECHNOLOGIES. I LOVE WORKING AT THE INTERSECTION OF CREATIVITY AND USER FRIENDLY INTERFACES. I CREATE MEMORABLE WEB EXPERIENCES.
            </Slide>
              <br />
              <br />
              <br />
            <Slide bottom>
              IF I don't know something I won't stop until i find the solution and get the job done.
            </Slide>
          </Text>
          <Slide bottom>
          <p style={{fontSize:'medium',fontWeight:'400',lineHeight:'1.32',width:'90%'}} >
          With my experience in UI and product engineering, I solve product problems and build appealing usable web experiences.
          </p>
          </Slide>
        <h3>
          Want to know more about me ?
          <br />
          <CustomButtonContainer href='/about'>
            more about me
          </CustomButtonContainer>
        </h3>
        
        </Description>
      </Container>
    </Trapez>
  )
}
