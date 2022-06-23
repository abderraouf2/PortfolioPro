import React from 'react';
import { ProjectsContainer,ProjectPage } from './projects.style';
import Fade from 'react-reveal/Fade';
import { Title,Paragraph,Container,Description,Text } from '../about/about.style';
import { DATA } from './data';

import ProjectCard from '../projectCard/projectCard';

export default function projects() {
  return (
    <ProjectPage id='projects'>
      <Container>
      <Paragraph>
        02/
      </Paragraph>
      <Description>
        <Text>
          recent projects
        </Text>
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
