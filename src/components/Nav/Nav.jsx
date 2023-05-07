import SearchBar from "../SearchBar/SearchBar";
import styled from "./nav.module.css";
import { NavLink, useLocation} from "react-router-dom";

const Nav = (props) => {

  const location = useLocation();

  if (location.pathname === '/') {
    return null;
  }

  const { onSearch, logout } = props;

  const { nav, btn, imglogo } = styled;

  return (
    <div>
      <nav className={nav}>
        <NavLink to="/home">
          <button className={btn}>Home</button>
        </NavLink>
        <NavLink to="/about">
          <button className={btn}>About</button>
        </NavLink>
        <NavLink to="/">
          <button className={btn} onClick={logout}>Logout</button>
        </NavLink>
        <SearchBar onSearch={onSearch} />
        <img className={imglogo} src="https://preview.redd.it/eg7w8d3e6rhz.png?width=1080&crop=smart&auto=webp&v=enabled&s=8b4de4e48605850b5463b0a7d6d30eb1309c77d3" alt="" />
      </nav>
          </div>
  );
};

export default Nav;
