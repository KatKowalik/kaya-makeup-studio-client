import "./LoginPage.scss";
import loginImg from "../../assets/images/Login image.png";
import logo from "../../assets/icons/logo-white-color.svg";
import { Link } from "react-router-dom";


const LoginPage = () => {
    return (
        <section className="login">
        <img src={loginImg} alt="woman's face with a brown=toned makeup" className="login__image"/>
            <div className="login__card">
                <img src={logo} alt="logo" className="login__logo"/>
                <h2 className="login__title subheader">Welcome Back!</h2>
                <form className="login__form">
                    <div className="login__field-container">
                        <label htmlFor="email" className="login__label label">E-mail</label>
                        <input name="email" type="text" id="email" className="form-field"/>
                    </div>
                    <div className="login__field-container">
                        <label htmlFor="password" className="create-account__label label">Password</label>
                        <input name="password" type="password" id="password" className="form-field"/>
                    </div>
                    <div className="login__button-container">
                        <Link to="/" className="login__button-link">
                            <button className="login__button secondary-button label">Back</button>
                        </Link>
                        <Link to="#" className="login__button-link">
                            <button className="login__button primary-button label">Log in</button>
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default LoginPage;