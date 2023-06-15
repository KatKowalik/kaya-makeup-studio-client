import "./BookAppointmentPage.scss";
import { Link } from "react-router-dom";
import kaya from "../../assets/images/Kaya-small.png";
import { DateCalendar } from "@mui/x-date-pickers"; 
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'



const BookAppointmentPage = () => {
    return (
        <section className="book-app">
        <h2 className="book-app__header section-header">Book appointment</h2>
        <div className="book-app__dashboard">
            <div className="book-app__artists">
                <p className="book-app__subtitle subheader">Choose your artist:</p>
                <div className="book-app__avatars">
                    <div className="book-app__avatar-container selected">
                        <img src={kaya} alt="kaya" className="book-app__avatar"/>
                    </div>
                    <div className="book-app__avatar-container"></div>
                    <div className="book-app__avatar-container"></div>
                    <div className="book-app__avatar-container"></div>
                    <div className="book-app__avatar-container"></div>
                </div>
            </div>
            <div className="book-app__pick-time">
                <div className="book-app__calendar">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar />
                    </LocalizationProvider>
                </div>
                <div className="book-app__times">
                    <div className="book-app__available-times">
                        <p className="book-app__time-slot body-large">09:00AM</p>
                        <p className="book-app__time-slot body-large">10:00AM</p>
                        <p className="book-app__time-slot body-large">11:00AM</p>
                        <p className="book-app__time-slot body-large">12:00PM</p>
                        <p className="book-app__time-slot body-large">01:00PM</p>
                        <p className="book-app__time-slot body-large">02:00PM</p>
                    </div>
                    <div className="book-app__button-container">
                        <Link to="#">
                            <button className="book-app__button secondary-button label">Back</button>
                        </Link>
                        <Link to="#">
                            <button className="book-app__button primary-button label">Continue</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default BookAppointmentPage;