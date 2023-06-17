import "./AppointmentConfirmationPage.scss";
import backArrowIcon from "../../assets/icons/back-arrow-icon.svg";
import { Link } from "react-router-dom";
import confirmImg from "../../assets/images/confirm-img.png";


const AppointmentConfirmationPage = () => {
    return (
        <section className="confirmation">
            <h1 className="confirmation__title page-header">Book appointment</h1>
            <div className="confirmation__div-wrapper">
                <div className="confirmation__appointment">
                    <p className="confirmation__app-info subheader">Your appointment:
                        <span className="span"> June 22nd, 2023 05:00PM</span>
                    </p>
                </div>
                <div className="confirmation__credentials">
                    <Link to="/book_appointment">
                        <img src={backArrowIcon} alt="back arrow" className="confirmation__back-arrow"/>
                    </Link>
                    <div className="confirmation__wrapper">
                        <div className="confirmation__signup">
                            <p className="confirmation__text body-large">First time here?
                                <span className="span"> Create an account.</span>
                            </p>
                            <Link to="/signup">
                                <button className="confirmation__button primary-button label">Sign up</button>
                            </Link>
                        </div>
                        <div className="confirmation__login">
                            <p className="confirmation__text body-large">Already have an account?
                                <span className="span"> Log in.</span>
                            </p>
                            <Link to="/login">
                                <button className="confirmation__button primary-button label">Log in</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <img src={confirmImg} alt="woman in green sweater wearing brown-toned makep" className="confirmation__img"/>

        </section>
    )
}

export default AppointmentConfirmationPage;