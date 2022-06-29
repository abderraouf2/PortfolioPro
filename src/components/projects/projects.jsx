import React from 'react';
import { ProjectsContainer,ProjectPage } from './projects.style';
// import Fade from 'react-reveal/Fade';
import { Paragraph,Container,Description } from '../about/about.style';
import { DATA } from './data';

import ProjectCard from '../projectCard/projectCard';

export default function projects() {
  return (
    <ProjectPage id='projects'>
      <Container style={{flexDirection:'row',marginBottom:'3vh'}}>
      <Paragraph>
        02/
      </Paragraph>
      <Description style={{flexDirection:'row',justifyContent:'space-around',marginTop:'0vh'}}>
              <p style={{fontSize:'20px',fontWeight:'400',lineHeight:'1.32',width:'20%',marginTop:'5vh'}} >
                RECENT PROJECTS
              </p>
              </Description>
      </Container>
      <ProjectsContainer>
        {
          DATA.map(project=> <ProjectCard key={project.id} title={project.title} image={project.img} desc= {project.description} url={project.url}  />)
        }
      </ProjectsContainer>
    </ProjectPage>
  )
}
