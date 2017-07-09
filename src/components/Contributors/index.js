import { h } from 'preact';
import { ContributorsContainer, ContributorAvatar } from './style';

const Contributors = ({ contributors }) =>
  <ContributorsContainer>
    <h3>Contributors</h3>
    {contributors.map(contributor =>
      <a
        href={contributor.author.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ContributorAvatar
          src={contributor.author.avatar_url}
          alt={contributor.author.login}
        />
      </a>
    )}

  </ContributorsContainer>;

export default Contributors;
