import "./BookAppointmentPage.scss";
import { Link } from "react-router-dom";
import Calendar from "../../Components/Calendar/Calendar";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import AppConfirmationModal from "../../Components/AppConfirmationModal/AppConfirmationModal";
import axios from "axios";


const BookAppointmentPage = ({ artists, activeUser }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedArtist, setSelectedArtist] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [selectedDate, setSelectedDate] = useState([]);
    const [selectedTime, setSelectedTime] = useState([]);
    const [formattedDate, setFormattedDate] = useState([]);
    
    
    const newAppointment = {
        date: formattedDate,
        time: selectedTime,
        user_id: activeUser.id,
        artist_id: +selectedArtist,
    }

    const openModal = (e) => {
        setShowModal(true)
    }

    const handleSelectArtist = (e) => {
        e.preventDefault();
        setSelectedArtist(e.target.getAttribute("value"))
    }

    useEffect(() => {
        const getAppointments = async() => {
            try {
                if(!selectedArtist) return;
                const appointmentsData = await axios.get(`http://localhost:8080/artists/appointments/${selectedArtist}`)
                setAppointments(appointmentsData.data)
            } catch(error){
                console.log(error);
            }
        }
        getAppointments();
    }, [selectedArtist])

    const handleChangeDate = (e) => {
        setSelectedDate(e.$d);
        const formattedDate = new Date(e.$d).toISOString().replace('-', '/').split('T')[0].replace('-', '/')
        setFormattedDate(formattedDate);
    }

    const handleSelectedTime = (e) => {
        e.preventDefault();
        setSelectedTime(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        // if(!selectedDate || !selectedTime || !activeUser || !selectedArtist) return;
        axios
        .post("http://localhost:8080/appointments", newAppointment)
        .then((response) => {
            console.log(response)
            console.log("New appointment added")
            openModal();
        })
        .catch(error => {
            console.log(error)
        })
}
    const dateFormat = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }
   
    const bookedTimeSlots = []
    appointments.map(appointment => {
        if((new Date(appointment.date).toLocaleDateString("en-US", dateFormat)) == (new Date(selectedDate).toLocaleDateString("en-US", dateFormat)))
        bookedTimeSlots.push(appointment)
        return bookedTimeSlots;
    })

    const timeSlots = [
        {
            id: 1,
            value: "09:00:00",
            display: "09:00AM",
        },
        {
            id: 2,
            value: "10:00:00",
            display: "10:00AM",
        },
        {
            id: 3,
            value: "11:00:00",
            display: "11:00AM",
        },
        {
            id: 4,
            value: "12:00:00",
            display: "12:00PM",
        },
        {
            id: 5,
            value: "13:00:00",
            display: "01:00PM",
        },
        {
            id: 6,
            value: "14:00:00",
            display: "02:00PM",
        },
        {
            id: 7,
            value: "15:00:00",
            display: "03:00PM",
        },
        {
            id: 8,
            value: "16:00:00",
            display: "04:00PM",
        },
        {
            id: 9,
            value: "17:00:00",
            display: "05:00PM",
        },
        {
            id: 10,
            value: "18:00:00",
            display: "06:00PM",
        },
        {
            id: 11,
            value: "19:00:00",
            display: "07:00PM",
        },
        {
            id: 12,
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
                            <button 
                                className="book-app__time-slot body-large not-available" 
                                disabled value={time.value}
                                key={time.id}>
                                    {time.display}
                            </button>
                            :
                            <button 
                                className="book-app__time-slot body-large" 
                                value={time.value}
                                onClick={handleSelectedTime}
                                key={time.id}>
                                    {time.display}
                            </button>
                        )
                            
                     )})
                    }
                    </div>
                    <div className="book-app__button-container">
                        <Link to="/">
                            <button className="book-app__button secondary-button label">Back</button>
                        </Link>
                        <Link to="#">
                            <button className="book-app__button primary-button label" onClick={handleSubmit}>Confirm</button>
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