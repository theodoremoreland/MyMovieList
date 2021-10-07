import { NavLink } from 'react-router-dom';

// Icons
import { 
    CgFilm,
    CgProfile,
    CgUserList
 } from "react-icons/cg";

// Styles
import './Menu.css';

export default function Menu() {
  return (
    <div className="menu">
        <h2>
            <CgFilm />
            <span>MyMovieList</span>
        </h2>
        <ul>
            <NavLink to="/user" className="nav-button">
                <li>
                    <CgProfile />
                    <span>Profile</span>
                </li>
            </NavLink>
            <NavLink to="/movie-list" className="nav-button">
                <li>
                    <CgFilm />
                    <span>Movies</span>
                </li>
            </NavLink>
            <NavLink to="/user-list" className="nav-button">
                <li>
                    <CgUserList />
                    <span>Users</span>
                </li>
            </NavLink>
        </ul>
    </div>
  );
}