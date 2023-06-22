import "./BookAppointmentPage.scss";
import { Link } from "react-router-dom";
import Calendar from "../../Components/Calendar/Calendar";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import AppConfirmationModal from "../../Components/AppConfirmationModal/AppConfirmationModal";
import axios from "axios";


const BookAppointmentPage = ({ artists }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedArtist, setSelectedArtist] = useState([]);
    const [appointments, setAppointments] = useState([])
    const [selectedDate, setSelectedDate] = useState([])
    


    const openModal = (e) => {
        e.preventDefault();
        setShowModal(true)
    }

    const handleSelectArtist = (e) => {
        e.preventDefault();
        setSelectedArtist(e.target.getAttribute("value")) 
    }

    useEffect(() => {
        const getAppointments = async() => {
            try {
                const appointmentsData = await axios.get(`http://localhost:8080/artists/appointments/${selectedArtist}`)
                setAppointments(appointmentsData.data)
            } catch(error){
                console.log(error);
            }
        }
        getAppointments();
    }, [selectedArtist])

    const handleChangeDate = (e) => {
        setSelectedDate(e.$d.toLocaleDateString("en-US", dateFormat))
    }

    const dateFormat = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }
   
    const bookedTimeSlots = []
    appointments.map(appointment => {
        if((new Date(appointment.date).toLocaleDateString("en-US", dateFormat)) == selectedDate)
        bookedTimeSlots.push(appointment)
        return bookedTimeSlots;
    })

    console.log(bookedTimeSlots);

    const timeSlots = [
        {
            value: "09:00:00",
            display: "09:00AM",
        },
        {
            value: "10:00:00",
            display: "10:00AM",
        },
        {
            value: "11:00:00",
            display: "11:00AM",
        },
        {
            value: "12:00:00",
            display: "12:00PM",
        },
        {
            value: "13:00:00",
            display: "01:00PM",
        },
        {
            value: "14:00:00",
            display: "02:00PM",
        },
        {
            value: "15:00:00",
            display: "03:00PM",
        },
        {
            value: "16:00:00",
            display: "04:00PM",
        },
        {
            value: "17:00:00",
            display: "05:00PM",
        },
        {
            value: "18:00:00",
            display: "06:00PM",
        },
        {
            value: "19:00:00",
            display: "07:00PM",
        },
        {
            value: "20:00:00",
            display: "08:00PM",
        },
    ]

    return (
        <section className="book-app">
        <h2 className="book-app__header section-header">Book appointment</h2>
        <form className="book-app__dashboard">
            <div className="book-app__artists">
                <p className="book-app__subtitle subheader">Choose your artist:</p>
                <div className="book-app__avatars">
                { artists.map(artist => {
                    return (
                        <button className="book-app__outline" 
                            key={artist.artist_id} 
                            onClick={handleSelectArtist}
                            value={artist.artist_id}
                            >
                            <div className="book-app__avatar-container" value={artist.artist_id}>
                                <img 
                                    src={artist.avatar} 
                                    alt={artist.first_name} 
                                    value={artist.artist_id} 
                                    className="book-app__avatar"
                                />
                            </div>
                        </button>
                    )})
                }
                </div>
            </div>
            <div className="book-app__pick-time">
                <div className="book-app__calendar">
                    <Calendar handleChangeDate={handleChangeDate}/>
                </div>
                <div className="book-app__times">
                    <div className="book-app__available-times">
                    { timeSlots.map(time => {
                        return ( (bookedTimeSlots.find(appointment => {
                            return(
                            appointment.time == time.value
                        )})?
                            <button className="book-app__time-slot body-large not-available" disabled value={time.value}>{time.display}</button>
                            :
                            <button className="book-app__time-slot body-large" value={time.value}>{time.display}</button>
                        )
                            
                     )})
                    }
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
        </form>
        {showModal && createPortal(
            <AppConfirmationModal setOpenModal={setShowModal}/>,
            document.body
        )}
        </section>
    )
}

export default BookAppointmentPage;