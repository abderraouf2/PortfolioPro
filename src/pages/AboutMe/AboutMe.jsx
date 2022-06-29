import React from 'react';
import Skills from '../../components/skills/skills';
import { Container,Text, Description,Paragraph } from '../../components/about/about.style';
import { LeftHeadContainer,Image } from '../../components/top/top.style';
import Raouf from '../../components/top/raouf.png';
import Footer from '../../components/footer/footer'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import { Zoom } from 'react-reveal';
import { Link } from 'react-router-dom';
import './AboutMe.scss'

export default function AboutMe() {
  return (
    <div className='cv'>
      <div className='header'>
        <Link to='/' className='link'>
          .Abderraouf
        </Link>
      </div>
      <Container style={{marginTop:'20vh'}}>
      <Paragraph style={{marginTop:'1vh'}}>
          01/
      </Paragraph>
      <LeftHeadContainer id='font' >
      <Fade left cascade>
        PASSIONATE
        <br />
        CREATIVE
        <br />
        DEVELOPER
        <br />
        <Zoom>
        <Image src={Raouf} />
        </Zoom>
      </Fade>
      <Fade left cascade >
        <div style={{marginTop:'5vh',lineHeight:'0.95',fontWeight:'100'}}>
        BASED IN
        <br />
        ALGERIA
        <br />
        </div>
      </Fade>
      </LeftHeadContainer>
      </Container>
      <Container>
        <Description id='education'>
          <Text style={{marginRight:'2%',width:'100%'}}>
            <Slide bottom>
              EDUCATION
            </Slide>
          </Text>
          <p id='p'>
          <Slide bottom>
            I'm a front end developer and a telecomunication and TIC engeneer. I started leaning web technologies 2 years ago and I started using Reactjs a year ago after getting confortanle with Javascript.I've been building websites and developing myself by building projects like E-commerce website.
          </Slide>
          </p>
        </Description>
      </Container>
      <Container style={{marginTop:'5vh'}}>
      <Paragraph >
          02/
      </Paragraph>
      <Description  id='skills'>
          <Text style={{marginRight:'2%',width:'35%'}}>
            <Slide bottom>
              Skills
            </Slide>
          </Text>
          <p style={{width:'90%'}} >
            <Slide bottom>  
                <Skills />
            </Slide>
          </p>
      </Description>
      </Container>
      <Footer />
    </div>
  )
}
