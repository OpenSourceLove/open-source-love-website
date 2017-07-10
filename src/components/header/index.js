import { h } from 'preact';
import { Link } from 'preact-router/match';
import logo from '../../assets/logo.svg';
import { HeaderBar, HeaderLink } from './style';

const Header = () =>
  <HeaderBar>
    <img src={logo} alt="Open Source Love" />
    <nav>
      <HeaderLink><Link href="/">Home</Link></HeaderLink>
      <HeaderLink><Link href="/about">About</Link></HeaderLink>
      <HeaderLink>
        <a
          href="https://github.com/OpenSourceLove"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </HeaderLink>
    </nav>
  </HeaderBar>;

export default Header;
