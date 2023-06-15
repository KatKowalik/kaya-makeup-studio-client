import { Link } from "react-router-dom";
import "./AccountCreatedModal.scss";



const AccountCreatedModal = () => {
    return(
        <section className="modal">
            <div className="modal__card">
                <h2 className="modal__title">Your account was successfully created!</h2>
                <p className="modal__body">We sent a confirmation e-mail to the address provided during registration.</p>
                <Link to="/login">
                    <button className="modal__button primary-button label">Log in</button>
                </Link>
                
            </div>
        </section>
    )
}

export default AccountCreatedModal;