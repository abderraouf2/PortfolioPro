import React from 'react';
import { ProjectsContainer,ProjectPage } from './projects.style';
// import Fade from 'react-reveal/Fade';
import { Container } from '../about/about.style';
import { DATA } from './data';
import '../about/about.scss';
import './projects.scss'

import ProjectCard from '../projectCard/projectCard';

export default function projects() {
  return (
    <ProjectPage id='projects'>
      <Container id='projectContainer' >
      <h2 className='main-title' style={{margin:'0 0 5vh 0',paddingLeft:'2.2%',paddingTop:'0'}}>
        Works
      </h2>
      </Container>
      <ProjectsContainer>
        {
          DATA.map(project=> <ProjectCard key={project.id} title={project.title} image={project.img} desc= {project.description} url={project.url}  />)
        }
      </ProjectsContainer>
    </ProjectPage>
  )
}
