import { h } from 'preact';
import {
  GoMarkGithub,
  GoGlobe,
  GoStar,
  GoEye,
  GoRepoForked,
} from 'react-icons/lib/go';
import Capitalize from 'capitalize-it';
import { Info, ProjectInfo, List, Section } from './style';
import theme from '../../theme';

const Project = ({ project }) =>
  <Section>
    <h3>Project</h3>
    <Info>
      <img
        src={project.owner.avatar_url}
        width="140"
        height="140"
        alt={project.owner.login}
      />
      <ProjectInfo>
        <h1>
          {Capitalize(project.name)}     {' '}
          <a href={project.html_url} target="_blank" rel="noopener noreferrer">
            <GoMarkGithub {...theme.svgSize} />
          </a>
        </h1>
        <h3>
          Created by:{' '}
          <a
            href={project.owner.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            @{project.owner.login}
          </a>
        </h3>
        <p>{project.description}</p>
        <List>
          <li>
            <GoGlobe {...theme.svgSize} />{' '}
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.homepage.split('://')[1]}
            </a>
          </li>
          <li>
            <GoStar {...theme.svgSize} />{' '}
            {project.stargazers_count}
          </li>
          <li>
            <GoEye {...theme.svgSize} />{' '}
            {project.subscribers_count}
          </li>
          <li>
            <GoRepoForked {...theme.svgSize} />{' '}
            {project.forks_count}
          </li>
        </List>
      </ProjectInfo>
    </Info>
  </Section>;

export default Project;
