import "./AppointmentCard.scss";
import cancelIcon from "../../assets/icons/cancel-icon.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { createPortal } from 'react-dom';
import CancelAppointmentModal from "../CancelAppointmentModal/CancelAppointmentModal";



const AppointmentCard = ({ bookedAppointments }) => {
    const [showModal, setShowModal] = useState(false);
    const [appToBeDel, setAppToBeDel] = useState([]);
   

   const dateFormat = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }
   
    const openModal = (e) => {
        const appointmentId = e.target.getAttribute("value");
        setShowModal(true);
        const appointmentIndex = bookedAppointments.findIndex(appointment => appointment.appointment_id == appointmentId);
        const activeAppointment = bookedAppointments[appointmentIndex].appointment_id
        setAppToBeDel(activeAppointment);
        console.log(activeAppointment);   
    }
   
    const closeModal = (e) => {
        setShowModal(false)
    }

    return (
        <div className="appointment-card__wrapper">
            { bookedAppointments.map(appointment => {
                return (
                <article className="appointment-card" key={appointment.appointment_id}>
                    <div className="appointment-card__details-container appointment-card__date">
                        <p className="appointment-card__detail body-large">{new Date(appointment.date).toLocaleDateString("en-US", dateFormat)}</p>
                    </div>
                    <div className="appointment-card__details-container">
                        <p className="appointment-card__detail body-large">{new Date('1970-01-01T' + appointment.time + 'Z').toLocaleTimeString('en-US',
                        {timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'}
                      )}</p>
                    </div>
                    <div className="appointment-card__details-container">
                        <p className="appointment-card__detail body-large">{appointment.artist_name}</p>
                    </div>
                    <div className="appointment-card__details-container">
                        <Link to="#" className="appointment-card__cancel-link" onClick={openModal}>
                            <img src={cancelIcon} alt="cancel icon" className="appointment-card__icon" value={appointment.appointment_id}/>
                            <p className="appointment-card__text body-large" value={appointment.appointment_id}>Cancel</p>
                        </Link>
                    </div>
                </article>
                )
        })}
        {showModal && createPortal(
            <CancelAppointmentModal 
                appToBeDel={appToBeDel}
                closeModal={closeModal}
            />,
            document.body
        )}
        </div>   
    )
}


export default AppointmentCard;
