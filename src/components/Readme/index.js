import { h, Component } from 'preact';
import ReactMarkdown from 'react-markdown';
import { GoUnfold, GoFold } from 'react-icons/lib/go';
import upperFirst from 'lodash/upperFirst';
import { ReadmeContainer, Helper } from './style';
import theme from '../../theme';

class Readme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.toggleReadme = this.toggleReadme.bind(this);
  }

  toggleReadme(e) {
    e.preventDefault();
    this.setState({
      open: !this.state.open,
    });
  }

  render({ readme, repo }) {
    return (
      <div>
        <h3>What is {upperFirst(repo)}?</h3>
        <ReadmeContainer open={this.state.open}>
          <ReactMarkdown source={readme} />
        </ReadmeContainer>
        <h3>
          <a href="#" onClick={this.toggleReadme}>
            <Helper>
              {this.state.open ? 'Collapse the Readme' : 'Read all the Readme'}
            </Helper>
            {this.state.open
              ? <GoFold {...theme.svgSize} />
              : <GoUnfold {...theme.svgSize} />}
          </a>
        </h3>
      </div>
    );
  }
}

export default Readme;
