import { h, Component } from 'preact';
import ReactMarkdown from 'react-markdown';
import { Repo } from './style';
import getRepo from '../../services/getRepo';
import Project from '../../components/project/index';
import Contributors from '../../components/Contributors/index';

export default class Profile extends Component {
  state = {
    info: {},
    loading: true,
  };

  componentDidMount() {
    getRepo(this.props.developer, this.props.repo).then(info =>
      this.setState({ info, loading: false })
    );
  }

  render({ developer, repo }, { info, loading }) {
    return (
      <Repo>
        {!loading &&
          <div style={{ width: '100%' }}>
            <Project project={info} />
            <Contributors contributors={info.contribs} />
            <ul>
              {info.comments &&
                info.comments.map(comment =>
                  <li key={comment.date}>
                    <strong>{comment.name}</strong>
                    <p>{comment.message}</p>
                  </li>
                )}

              {!info.comments && <p>Show {repo} some love !</p>}
            </ul>
          </div>}
      </Repo>
    );
  }
}
