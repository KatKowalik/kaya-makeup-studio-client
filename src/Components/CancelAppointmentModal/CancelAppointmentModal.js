import "../../Components/AccountCreatedModal/AccountCreatedModal.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const CancelAppointmentModal = ({appToBeDel, closeModal}) => {

    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8080/appointments/${appToBeDel}`)
            .then(response => {
                console.log(`Deleted appointment with ID ${appToBeDel}`);
            })
            .catch(error => {
                console.error(error);
            });
        closeModal();
        window.location.reload();
    }

   
    return(
        <section className="modal">
            <div className="modal__card">
                <h2 className="modal__title">Are you sure you want to cancel this appointment?</h2>
                <div className="modal__button-container">
                    <Link to="#" className="modal__button-link">
                        <button className="modal__button secondary-button label" onClick={closeModal}>Back</button>
                    </Link>
                    <Link to="#" className="modal__button-link">
                        <button className="modal__button primary-button label" onClick={handleDelete}>Continue</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CancelAppointmentModal;