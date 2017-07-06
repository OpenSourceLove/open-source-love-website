/* eslint-disable react/prefer-stateless-function */
// TO ADD A LOT MORE HERE

import { h, Component } from 'preact';
import style from './style.css';

export default class Home extends Component {
  render() {
    return (
      <div className={style.home}>
        <h1>Home</h1>
        <p>This is the Home component.</p>
      </div>
    );
  }
}
