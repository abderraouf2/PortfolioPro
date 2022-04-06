import React from 'react';
import { ProjectsContainer,ProjectPage,Title } from './projects.style';
import Zoom from 'react-reveal/Zoom';

import { DATA } from './data';

import ProjectCard from '../projectCard/projectCard';

export default function projects() {
  return (
    <ProjectPage id='projects'>
      <Title><Zoom left cascade>Main projects :</Zoom></Title>
      <ProjectsContainer>
        {
          DATA.map(project=> <ProjectCard key={project.id} title={project.title} image={project.img} desc= {project.description}  />)
        }
      </ProjectsContainer>
    </ProjectPage>
  )
}
