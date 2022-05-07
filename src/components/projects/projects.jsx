import React from 'react';
import { ProjectsContainer,ProjectPage,Title } from './projects.style';
import Fade from 'react-reveal/Fade';

import { DATA } from './data';

import ProjectCard from '../projectCard/projectCard';

export default function projects() {
  return (
    <ProjectPage id='projects'>
      <Title><Fade left cascade>Main projects :</Fade></Title>
      <ProjectsContainer>
        {
          DATA.map(project=> <ProjectCard key={project.id} title={project.title} image={project.img} desc= {project.description} url={project.url}  />)
        }
      </ProjectsContainer>
    </ProjectPage>
  )
}
