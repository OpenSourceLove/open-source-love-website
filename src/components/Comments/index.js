import { h } from 'preact';
// import { ContributorsContainer, ContributorAvatar } from './style';

const Comments = ({ comments, repo }) =>
  <div>
    <h3>
      {repo} Love
      <span role="img" aria-label="love emoji">❤️</span>
    </h3>
    <ul>
      {comments &&
        comments.map(comment =>
          <li key={comment.date}>
            <strong>{comment.name}</strong>
            <p>{comment.message}</p>
          </li>
        )}

      {!comments && <h3>Show {repo} some love !</h3>}
    </ul>
  </div>;

export default Comments;
