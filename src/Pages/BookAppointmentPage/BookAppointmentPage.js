import "./BookAppointmentPage.scss";
import { Link } from "react-router-dom";
import kaya from "../../assets/images/Kaya-small.png";
import Calendar from "../../Components/Calendar/Calendar";
import { useState } from "react";
import { createPortal } from "react-dom";
import AppConfirmationModal from "../../Components/AppConfirmationModal/AppConfirmationModal";


const BookAppointmentPage = ({ artists }) => {
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
                { artists.map(artist => {
                    return (
                        <div className="book-app__outline" key={artist.artist_id}>
                            <div className="book-app__avatar-container" value={artist.artist_id}>
                                <img src={artist.avatar} alt={artist.first_name} className="book-app__avatar"/>
                            </div>
                        </div>
                )})
                }
                </div>
            </div>
            <form className="book-app__pick-time">
                <div className="book-app__calendar">
                    <Calendar />
                </div>
                <div className="book-app__times">
                    <div className="book-app__available-times">
                        <button className="book-app__time-slot body-large" value="09:00:00">09:00AM</button>
                        <button className="book-app__time-slot body-large" value="10:00:00">10:00AM</button>
                        <button className="book-app__time-slot body-large" value="11:00:00">11:00AM</button>
                        <button className="book-app__time-slot body-large" value="12:00:00">12:00PM</button>
                        <button className="book-app__time-slot body-large" value="13:00:00">01:00PM</button>
                        <button className="book-app__time-slot body-large" value="14:00:00">02:00PM</button>
                        <button className="book-app__time-slot body-large" value="15:00:00">03:00AM</button>
                        <button className="book-app__time-slot body-large" value="16:00:00">04:00AM</button>
                        <button className="book-app__time-slot body-large" value="17:00:00">05:00AM</button>
                        <button className="book-app__time-slot body-large" value="18:00:00">06:00PM</button>
                        <button className="book-app__time-slot body-large" value="19:00:00">07:00PM</button>
                        <button className="book-app__time-slot body-large" value="20:00:00">08:00PM</button>
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
            </form>
        </div>
        {showModal && createPortal(
            <AppConfirmationModal setOpenModal={setShowModal}/>,
            document.body
        )}
        </section>
    )
}

export default BookAppointmentPage;