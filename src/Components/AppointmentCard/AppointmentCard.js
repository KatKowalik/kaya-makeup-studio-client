import "./AppointmentCard.scss";
import cancelIcon from "../../assets/icons/cancel-icon.svg";
import { Link } from "react-router-dom";


const AppointmentCard = ({ bookedAppointments }) => {
    console.log(bookedAppointments)

    const dateFormat = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
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
                        <Link to="#" className="appointment-card__cancel-link">
                            <img src={cancelIcon} alt="cancel icon" className="appointment-card__icon"/>
                            <p className="appointment-card__text body-large">Cancel</p>
                        </Link>
                    </div>
                </article>
                )
        })}
        </div>   
    )
}

export default AppointmentCard;