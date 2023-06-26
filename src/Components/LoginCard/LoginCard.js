import "../../Pages/LoginPage/LoginPage.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo-white-color.svg";


const LoginCard = ({ handleSubmit, handleChange, loggedUser, errorMessage }) => {
  
    return (
        <div className="login__card">
            <img src={logo} alt="logo" className="login__logo"/>
            <div className="login__title-container">
                <h2 className="login__title section-header">Welcome Back!</h2>
                <p className="login__text body-small">First time here? 
                    <Link to="/signup" className="login__link">
                        <span className="span"> Create an account.</span>
                    </Link>
                </p>
                <div className="login__error hidden">
                    <p className="login__error-message error-span">{errorMessage}</p>
                </div>
            </div>
            <form className="login__form" onSubmit={handleSubmit}>
                <div className="login__field-container">
                    <label htmlFor="email" className="login__label label">E-mail</label>
                    <input 
                        name="email" 
                        type="text" 
                        id="email" 
                        className="form-field"
                        value={loggedUser.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="login__field-container">
                    <label htmlFor="password" className="create-account__label label">Password</label>
                    <input 
                        name="password" 
                        type="password" 
                        id="password" 
                        className="form-field"
                        value={loggedUser.password}
                        onChange={handleChange}
                    />
                    <p className="login__forgot-password body-small">Forgot password?</p>
                </div>
                
                <div className="login__button-container">
                    <Link to="/" className="login__button-link">
                        <button className="login__button secondary-button label">Back</button>
                    </Link>
                        <button className="login__button primary-button label">Log in</button>
                </div>
            </form>
        </div>
    )
}

export default LoginCard;