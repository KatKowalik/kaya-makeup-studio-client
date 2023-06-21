import "./LoginPage.scss";
import loginImg from "../../assets/images/Login image.png";
import LoginCard from "../../Components/LoginCard/LoginCard";


const LoginPage = ({ handleSubmit, handleChange, loggedUser }) => {
    
    return (
        <section className="login">
        <img src={loginImg} alt="woman's face with a brown-toned makeup" className="login__image"/>
            <LoginCard 
                handleSubmit={handleSubmit} 
                handleChange={handleChange}
                loggedUser={loggedUser}
            />
        </section>
    )
}

export default LoginPage;