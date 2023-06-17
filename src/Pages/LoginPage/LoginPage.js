import "./LoginPage.scss";
import loginImg from "../../assets/images/Login image.png";
import LoginCard from "../../Components/LoginCard/LoginCard";


const LoginPage = () => {
    return (
        <section className="login">
        <img src={loginImg} alt="woman's face with a brown=toned makeup" className="login__image"/>
            <LoginCard />
        </section>
    )
}

export default LoginPage;