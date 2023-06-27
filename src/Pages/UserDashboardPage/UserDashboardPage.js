import "./UserDashboardPage.scss";
import { Link } from "react-router-dom";
import bookIcon from "../../assets/icons/book-icon.svg";
import profileIcon from "../../assets/icons/profile-icon.svg";
import editIcon from "../../assets/icons/edit-icon.svg";
import phoneIcon from "../../assets/icons/phone-icon.svg";
import emailIcon from "../../assets/icons/email-icon.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AppointmentCard from "../../Components/AppointmentCard/AppointmentCard";
import largeBookIcon from "../../assets/icons/large-book-icon.svg";


const UserDashboardPage = () => {
    const { id } = useParams();
    const [displayedUser, setDisplayedUser] = useState([]);
    const [bookedAppointments, setBookedAppointments] = useState([]);
    
    useEffect(() => {
        const getActiveUser = async () => {
            try {
                const userData = await axios.get(`http://localhost:8080/users/${id}`);
                setDisplayedUser(userData.data)
            } catch (error) {
                console.log(error)
            }
        };
        getActiveUser();
    }, [])

    
    useEffect(() => {
        const getAppointments = async() => {
            try {
                const appointmentData = await axios.get(`http://localhost:8080/appointments/${id}`)
                setBookedAppointments(appointmentData.data);
            } catch (error) {
                console.log(error)
            }
        };
        getAppointments();
    }, [bookedAppointments])

    
    return (
        <section className="user-dashboard">
            <h2 className="user-dashboard__header section-header">{`Welcome back, ${displayedUser.first_name}!`}</h2>
            <div className="user-dashboard__dashboard">
                
                { (!bookedAppointments[0])? 
                    <div className="user-dashboard__appointment">
                        <div className="user-dashboard__pop-up">
                            <p className="user-dashboard__app-info body-large">
                                No appointments scheduled yet.
                            </p>
                        </div>
                        <div className="user-dashboard__appointment-details">
                            <div className="user-dashboard__appointment-info">
                                <div className="user-dashboard__info">
                                    <h4 className="user-dashboard__no-appointments subheader">You don’t have any appointments scheduled.</h4>
                                    <div className="user-dashboard__book-app">
                                    <Link to="/book_appointment" className="user-dashboard__action-book">
                                        <p className="user-dashboard__text-book subheader">Book appointment</p>
                                        <img src={largeBookIcon} alt="book icon" className="user-dashboard__large-icon"/>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="user-dashboard__appointment">
                        <div className="user-dashboard__pop-up">
                            <p className="user-dashboard__app-info body-large">
                                You have an upcoming appointment.<span className="span body-large"> See details below.</span>
                            </p>
                        </div>
                        <div className="user-dashboard__appointment-details">
                            <div className="user-dashboard__appointment-info">
                                <div className="user-dashboard__info">
                                    <h4 className="user-dashboard__subtitle subheader">Your appointments: </h4>
                                    <div className="user-dashboard__table-headers">
                                        <p className="user-dashboard__label body-large date">Date:</p>
                                        <p className="user-dashboard__label body-large">Time:</p>
                                        <p className="user-dashboard__label body-large">Artist:</p>
                                        <p className="user-dashboard__label body-large">Actions:</p>
                                    </div>
                                    <AppointmentCard 
                                        id={id}
                                        bookedAppointments={bookedAppointments}
                                    />
                                </div>
                            </div>
                            <Link to="/book_appointment" className="user-dashboard__action">
                                <img src={bookIcon} alt="book icon" className="user-dashboard__icon"/>
                                <p className="user-dashboard__text body-small">Book appointment</p>
                            </Link>
                        </div>
                    </div>
                }
                <div className="user-dashboard__profile">
                    <img src={profileIcon} alt="profile icon" className="user-dashboard__profile-img"/>
                    <div className="user-dashboard__profile-info">
                        <h4 className="user-dashboard__subtitle subheader">Your profile:</h4>
                        <div className="user-dashboard__details-container">
                            <p className="user-dashboard__label body-large">First name</p>
                            <p className="user-dashboard__detail">{displayedUser.first_name}</p>
                        </div>
                        <div className="user-dashboard__details-container">
                            <p className="user-dashboard__label body-large">Last name:</p>
                            <p className="user-dashboard__detail">{displayedUser.last_name}</p>
                        </div>
                        <div className="user-dashboard__details-container">
                            <p className="user-dashboard__label body-large">E-mail:</p>
                            <p className="user-dashboard__detail">{displayedUser.email}</p>
                        </div>
                        <div className="user-dashboard__details-container">
                            <p className="user-dashboard__label body-large">Phone number:</p>
                            <p className="user-dashboard__detail">{displayedUser.phone_number}</p>
                        </div>
                    </div>
                    <div className="user-dashboard__action edit hidden">
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