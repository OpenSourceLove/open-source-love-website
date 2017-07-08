import { h } from 'preact';
import { Link } from 'preact-router/match';
import logo from '../../assets/logo.svg';
import { HeaderBar, TabLink } from './style';

const Header = () =>
  <HeaderBar>
    <img src={logo} alt="Open Source Love" />
    <nav>
      <Link href="/"><TabLink>Home</TabLink></Link>
      <Link href="/about"><TabLink>About</TabLink></Link>
      <Link href="https://github.com/OpenSourceLove">
        <TabLink>Github</TabLink>
      </Link>
    </nav>
  </HeaderBar>;

export default Header;
