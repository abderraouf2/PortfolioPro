import React from 'react';
import { ProjectsContainer,ProjectPage,Title } from './projects.style';

import { DATA } from './data';

import ProjectCard from '../projectCard/projectCard';

export default function projects() {
  return (
    <ProjectPage id='projects'>
      <Title>Main projects :</Title>
      <ProjectsContainer>
        {
          DATA.map(project=> <ProjectCard key={project.id} title={project.title} image={project.img} desc= {project.description}  />)
        }
      </ProjectsContainer>
    </ProjectPage>
  )
}
