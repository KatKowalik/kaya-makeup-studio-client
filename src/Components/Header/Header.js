import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo-white-color.svg";


const Header = ({activeUser, isLogged, handleLogOut}) => {
    return (
        <header className="header">
            <Link to="/" className="header__logo-link">
                <img src={logo} alt="logo" className="header__logo"/>
            </Link>
            <nav className="header__nav">
                <ul className="header__link-container">
                    <NavLink to="/" className="header__nav-link">
                        <li className="header__nav-item nav-links">About</li>
                    </NavLink>
                    <NavLink to="/our_team" className="header__nav-link">
                        <li className="header__nav-item nav-links">Our Team</li>
                    </NavLink>
                    <NavLink to="/services" className="header__nav-link">
                        <li className="header__nav-item nav-links">Services</li>
                    </NavLink>
                    <NavLink to="/portfolio" className="header__nav-link">
                        <li className="header__nav-item nav-links">Portfolio</li>
                    </NavLink>   
                </ul>
                
                {
                    (!isLogged) ? 
                    <div className="header__buttons-container">
                        <NavLink to="/login">
                            <button className="header__button primary-button label">Log in</button>
                        </NavLink>
                        <NavLink to="/signup">
                            <button className="header__button secondary-button label">Sign up</button>
                        </NavLink>
                    </div>
                    :
                    <div className="header__buttons-container">
                        <NavLink to="#">
                            <button className="header__button primary-button label" onClick={handleLogOut}>Log out</button>
                        </NavLink>
                        <NavLink to={`/user_dashboard/${activeUser.id}`}>
                            <button className="header__button secondary-button label">My Profile</button>
                        </NavLink>
                    </div>
                }     
            </nav>
        </header>
    )
}

export default Header;