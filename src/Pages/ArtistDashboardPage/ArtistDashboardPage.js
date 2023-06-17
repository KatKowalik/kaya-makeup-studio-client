import "./ArtistDashboardPage.scss";
import avatar from "../../assets/images/Kaya-small.png";
import AppointmentsList from "../../Components/AppointmentsList/AppointmentsList";
import Calendar from "../../Components/Calendar/Calendar";
import phoneIcon from "../../assets/icons/phone-icon.svg";
import emailIcon from "../../assets/icons/email-icon.svg";

const ArtistDashboardPage = () => {
    return (
        <section className="artist-dashboard">
            <div className="artist-dashboard__title-container">
                <h1 className="artist-dashboard__title section-header">Welcome back, Kaya!</h1>
                <div className="artist-dashboard__avatar-container">
                    <img src={avatar} alt="artist avatar" className="artist-dashboard__avatar"/>
                </div>
            </div>
            <div className="artist-dashboard__dashboard-wrapper">
                <div className="artist-dashboard__main-calendar">
                    <h2 className="artist-dashboard__month section-header">June, 2023</h2>
                    <div className="artist-dashboard__calendar">
                        <div className="artist-dashboard__weekdays">
                            <p className="artist-dashboard__weekday body-large">Mon</p>
                            <p className="artist-dashboard__weekday body-large">Tue</p>
                            <p className="artist-dashboard__weekday body-large">Wed</p>
                            <p className="artist-dashboard__weekday body-large">Thu</p>
                            <p className="artist-dashboard__weekday body-large">Fri</p>
                            <p className="artist-dashboard__weekday body-large">Sat</p>
                        </div>
                        <div className="artist-dashboard__dates">
                            <p className="artist-dashboard__date body-small">12/06</p>
                            <p className="artist-dashboard__date body-small">13/06</p>
                            <p className="artist-dashboard__date body-small">14/06</p>
                            <p className="artist-dashboard__date body-small">15/06</p>
                            <p className="artist-dashboard__date body-small">16/06</p>
                            <p className="artist-dashboard__date body-small">17/06</p>
                        </div>
                        <AppointmentsList />
                    </div>
                </div>
                <div className="artist-dashboard__side-divs">
                    <div className="artist-dashboard__small-calendar">
                        <Calendar />
                    </div>
                    <div className="artist-dashboard__next-client">
                        <h4 className="artist-dashboard__subheader subheader">Next client:</h4>
                        <div className="artist-dashboard__app-details">
                            <div className="artist-dashboard__app">
                                <p className="artist-dashboard__date body-small">June 14, 2023</p>
                                <p className="artist-dashboard__time body-small">04:00PM</p>
                            </div>
                            <p className="artist-dashboard__client-name body-small">Martha Smith</p>
                            <div className="artist-dashboard__detail-container">
                                <img src={phoneIcon} alt="phone icon" className="artist-dashboard__icon"/>
                                <p className="artist-dashboard__detail-info body-small">+1 (465) 552 0099</p>
                            </div>
                            <div className="artist-dashboard__detail-container">
                                <img src={emailIcon} alt="email icon" className="artist-dashboard__icon"/>
                                <p className="artist-dashboard__detail-info body-small">martha.smith@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ArtistDashboardPage;