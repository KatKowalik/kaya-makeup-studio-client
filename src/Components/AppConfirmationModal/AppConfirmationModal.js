import "../AccountCreatedModal/AccountCreatedModal.scss";


const AppConfirmationModal = ({ setOpenModal}) => {
    return(
        <section className="modal">
            <div className="modal__card">
                <h2 className="modal__title">Thank you for choosing Kaya Makeup Studio!</h2>
                <p className="modal__appointment">Your appointment is  scheduled at <span className="span"> June 22nd, 2023 at 05:00PM</span></p>
                <p className="modal__body">We sent you a confirmation on the e-mail you provided during booking.</p>
                <button className="modal__button primary-button label" onClick={() => setOpenModal(false)}>Close</button>
            </div>
        </section>
    )
}

export default AppConfirmationModal;