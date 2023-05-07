import SearchBar from "../SearchBar/SearchBar";
import styled from "./nav.module.css";
import { NavLink, useLocation} from "react-router-dom";

const Nav = (props) => {

  const location = useLocation();

  if (location.pathname === '/') {
    return null;
  }

  const { onSearch, logout } = props;

  const { nav, btn } = styled;

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
      </nav>
    </div>
  );
};

export default Nav;
