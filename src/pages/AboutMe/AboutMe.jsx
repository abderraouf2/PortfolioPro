import React from 'react';
import Skills from '../../components/skills/skills';
import { Container, Description, Title } from '../../components/about/about.style';
import { LeftHeadContainer } from '../../components/top/top.style';
import { BsLinkedin,BsTwitter, BsGithub } from 'react-icons/bs'
import Footer from '../../components/footer/footer'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
// import { Zoom } from 'react-reveal';
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
      <Container style={{marginTop:'10vh',width:'100vw',height:'80vh'}}>
      <LeftHeadContainer id='font'>
        {/* <img className='bgImg' src={Raouf} alt="" /> */}
      <Fade  cascade>
        <h3 style={{lineHeight:'1.2',marginTop:'0'}}>
          
        <span style={{color:'#89715b'}}>Hello!</span> I'm Abderraouf,
        <br />
        Web developer based 
        <br />
        in Algeria
        </h3>
        <div className='bannerIcons'>
          <a href="https://linkedin.com/in/abderraouf-mimoune-2290971a4" style={{width:'55px',marginRight:'5vw'}}><div style={{color:'#20007e',marginRight:'5vw'}}><BsLinkedin size='55px' /></div></a>
          <a href="https://twitter.com/Abderraouf29" style={{width:'55px',marginRight:'5vw'}}><div style={{color:'#0073ff',marginRight:'5vw'}}><BsTwitter size='55px' /></div></a>
          <a href="https://github.com/abderraouf2/" style={{width:'55px',marginRight:'5vw'}}><div style={{color:'white',marginRight:'5vw'}}><BsGithub size='55px' /></div></a>
        </div>
      </Fade>
      </LeftHeadContainer>
      </Container>
      <Container>
        <Description id='education'>
          <Title id='title2'>
            <Slide bottom>
              Education
            </Slide>
          </Title>
          <p style={{width:'100vw'}}>
            <p id='p'>
            <Slide bottom>
              I'm a front end developer and a telecomunication and TIC engeneer. I started leaning web technologies 2 years ago and I started using Reactjs a year ago after getting confortanle with Javascript. I've been building websites and developing myself by building projects like E-commerce website, landing pages, costum websites ...etc
            </Slide>
            </p>
          </p>
        </Description>
      </Container>
      <Container >
      <Description  id='skills'>
          <Title id='title'>
            <Slide bottom>
              Skills
            </Slide>
          </Title>
          <p style={{width:'100vw'}} >
            
                <Skills />
            
          </p>
        </Description>
      </Container>
      <Footer />
    </div>
  )
}
