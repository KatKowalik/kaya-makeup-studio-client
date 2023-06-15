import "./UserDashboardPage.scss";
import artistKaya from "../../assets/images/Kaya-small.png";
import { Link } from "react-router-dom";
import cancelIcon from "../../assets/icons/cancel-icon.svg";
import bookIcon from "../../assets/icons/book-icon.svg";
import profileIcon from "../../assets/icons/profile-icon.svg";
import editIcon from "../../assets/icons/edit-icon.svg";
import phoneIcon from "../../assets/icons/phone-icon.svg";
import emailIcon from "../../assets/icons/email-icon.svg";


const UserDashboardPage = () => {
    return (
        <section className="user-dashboard">
            <h2 className="user-dashboard__header section-header">Welcome back, Kat!</h2>
            <div className="user-dashboard__dashboard">
                <div className="user-dashboard__appointment">
                    <div className="user-dashboard__pop-up">
                        <p className="user-dashboard__app-info subheader">
                            You have an upcoming appointment with<span className="user-dashboard__span subheader"> Kaya.</span>
                        </p>
                    </div>
                    <div className="user-dashboard__appointment-details">
                        <div className="user-dashboard__appointment-info">
                            <div className="user-dashboard__info">
                                <h4 className="user-dashboard__subtitle subheader">Appointment details: </h4>
                                <div className="user-dashboard__details-container">
                                    <p className="user-dashboard__label body-large">Your artist:</p>
                                    <p className="user-dashboard__detail">Kaya</p>
                                </div>
                                <div className="user-dashboard__details-container">
                                    <p className="user-dashboard__label body-large">Date:</p>
                                    <p className="user-dashboard__detail">June 22nd, 2023</p>
                                </div>
                                <div className="user-dashboard__details-container">
                                    <p className="user-dashboard__label body-large">Time:</p>
                                    <p className="user-dashboard__detail">05:00PM</p>
                                </div>
                            </div>
                            <div className="user-dashboard__artist">
                                <div className="user-dashboard__img-frame">
                                    <img src={artistKaya} alt="artist profile" className="user-dashboard__artist-img"/>
                                </div>
                                <Link to="#">
                                    <button className="user-dashboard__button secondary-button label">Portfolio</button>
                                </Link>
                            </div>
                        </div>
                        <div className="user-dashboard__reschedule">
                            <h4 className="user-dashboard__subtitle subheader">Need to reschedule?</h4>
                            <div className="user-dashboard__actions">
                                <div className="user-dashboard__action">
                                    <img src={cancelIcon} alt="cancel icon" className="user-dashboard__icon"/>
                                    <p className="user-dashboard__text body-small">Cancel appointment</p>
                                </div>
                                <div className="user-dashboard__action">
                                    <img src={bookIcon} alt="book icon" className="user-dashboard__icon"/>
                                    <p className="user-dashboard__text body-small">Book appointment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="user-dashboard__profile">
                    <img src={profileIcon} alt="profile icon" className="user-dashboard__profile-img"/>
                    <div className="user-dashboard__profile-info">
                        <h4 className="user-dashboard__subtitle subheader">Your profile:</h4>
                        <div className="user-dashboard__details-container">
                            <p className="user-dashboard__label body-large">First name</p>
                            <p className="user-dashboard__detail">Kat</p>
                        </div>
                        <div className="user-dashboard__details-container">
                            <p className="user-dashboard__label body-large">Last name:</p>
                            <p className="user-dashboard__detail">Kowalik</p>
                        </div>
                        <div className="user-dashboard__details-container">
                            <p className="user-dashboard__label body-large">E-mail:</p>
                            <p className="user-dashboard__detail">kat.kowalik@mail.com</p>
                        </div>
                        <div className="user-dashboard__details-container">
                            <p className="user-dashboard__label body-large">Phone number:</p>
                            <p className="user-dashboard__detail">+1 (647) 223 4466</p>
                        </div>
                    </div>
                    <div className="user-dashboard__action edit">
                        <img src={editIcon} alt="edit icon" className="user-dashboard__icon"/>
                        <p className="user-dashboard__text  body-small">Edit</p>
                    </div>
                </div>
            </div>
            <div className="user-dashboard__contact">
                <h4 className="user-dashboard__contact-subtitle subheader">Have a question? Contact us!</h4>
                <div className="user-dashboard__action">
                    <img src={phoneIcon} alt="edit icon" className="user-dashboard__icon"/>
                    <p className="user-dashboard__text  body-small">+1 (902) 367 987</p>
                </div>
                <div className="user-dashboard__action">
                    <img src={emailIcon} alt="edit icon" className="user-dashboard__icon"/>
                    <p className="user-dashboard__text  body-small">contact@kayamakeupstudio.ca</p>
                </div>
            </div>

        </section>
    )
}

export default UserDashboardPage;