import { h, Component } from 'preact';
import { Repo, Main, Section } from './style';
import getRepo from '../../services/getRepo';
import Project from '../../components/project/index';
import Readme from '../../components/Readme/index';
import Comments from '../../components/Comments/index';
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
          <Main>
            <Section>
              <Project project={info} />
              <Contributors contributors={info.contribs} />
            </Section>
            <Readme readme={info.readme} repo={repo} />
            <Comments comments={info.comments} repo={repo} />
          </Main>}
      </Repo>
    );
  }
}
