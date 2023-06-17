import "./BookAppointmentPage.scss";
import { Link } from "react-router-dom";
import kaya from "../../assets/images/Kaya-small.png";
import Calendar from "../../Components/Calendar/Calendar";
import { useState } from "react";
import { createPortal } from "react-dom";
import AppConfirmationModal from "../../Components/AppConfirmationModal/AppConfirmationModal";


const BookAppointmentPage = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = (e) => {
        e.preventDefault();
        setShowModal(true)
    }


    return (
        <section className="book-app">
        <h2 className="book-app__header section-header">Book appointment</h2>
        <div className="book-app__dashboard">
            <div className="book-app__artists">
                <p className="book-app__subtitle subheader">Choose your artist:</p>
                <div className="book-app__avatars">
                    <div className="book-app__outline selected">
                        <div className="book-app__avatar-container">
                            <img src={kaya} alt="kaya" className="book-app__avatar"/>
                        </div>
                    </div>
                    <div className="book-app__avatar-container"></div>
                    <div className="book-app__avatar-container"></div>
                    <div className="book-app__avatar-container"></div>
                    <div className="book-app__avatar-container"></div>
                </div>
            </div>
            <div className="book-app__pick-time">
                <div className="book-app__calendar">
                    <Calendar />
                </div>
                <div className="book-app__times">
                    <div className="book-app__available-times">
                        <button className="book-app__time-slot body-large">09:00AM</button>
                        <button className="book-app__time-slot body-large">10:00AM</button>
                        <button className="book-app__time-slot body-large not-available" disabled>11:00AM</button>
                        <button className="book-app__time-slot body-large">12:00PM</button>
                        <button className="book-app__time-slot body-large">01:00PM</button>
                        <button className="book-app__time-slot body-large">02:00PM</button>
                    </div>
                    <div className="book-app__button-container">
                        <Link to="/">
                            <button className="book-app__button secondary-button label">Back</button>
                        </Link>
                        <Link to="/app_confirmation">
                            <button className="book-app__button primary-button label" onClick={openModal}>Confirm</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        {showModal && createPortal(
            <AppConfirmationModal setOpenModal={setShowModal}/>,
            document.body
        )}
        </section>
    )
}

export default BookAppointmentPage;