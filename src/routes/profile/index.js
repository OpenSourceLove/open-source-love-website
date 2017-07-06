import { h, Component } from 'preact';
import ReactMarkdown from 'react-markdown';
import getRepo from '../../services/getRepo';
import style from './style.css';

export default class Profile extends Component {
  state = {
    info: {},
    loading: true,
  };

  // gets called when this route is navigated to
  componentDidMount() {
    getRepo(this.props.developer, this.props.repo).then(info =>
      this.setState({ info, loading: false })
    );
  }

  // Note: `user` comes from the URL, courtesy of our router
  render({ developer, repo }, { info, loading }) {
    return (
      <div className={style.profile}>
        {!loading &&
          <div>
            <h1>Profile: {repo}</h1>
            <p>This is the user profile for a user named {developer}.</p>
            <ReactMarkdown source={info.readme} />
          </div>}
      </div>
    );
  }
}
