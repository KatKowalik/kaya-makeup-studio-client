import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo-white-color.svg";


const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header__logo-link">
                <img src={logo} alt="logo" className="header__logo"/>
            </Link>
            <nav className="header__nav">
                <ul className="header__link-container">
                    <NavLink to="#" className="header__nav-link">
                        <li className="header__nav-item body-large">About</li>
                    </NavLink>
                    <NavLink to="#" className="header__nav-link">
                        <li className="header__nav-item body-large">Our Team</li>
                    </NavLink>
                    <Link to="#" className="header__nav-link">
                        <li className="header__nav-item body-large">Services</li>
                    </Link>
                    <Link to="#" className="header__nav-link">
                        <li className="header__nav-item body-large">Portfolio</li>
                    </Link>   
                </ul>
                <div className="header__buttons-container">
                    <button className="header__button primary-button label">Log in</button>
                    <button className="header__button secondary-button label">Sign up</button>
                </div>
            </nav>
        </header>
    )
}

export default Header;