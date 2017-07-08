import { h } from 'preact';
import { Repo } from './style';

const Contributors = ({ contributors }) =>
  <div>
    <h3>Contributors</h3>
    {contributors.map(contributor =>
      <a
        href={contributor.author.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          width="60"
          height="60"
          src={contributor.author.avatar_url}
          alt={contributor.author.login}
        />
      </a>
    )}

  </div>;

export default Contributors;
