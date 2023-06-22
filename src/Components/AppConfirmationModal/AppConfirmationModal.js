import "../AccountCreatedModal/AccountCreatedModal.scss";


const AppConfirmationModal = ({ setOpenModal}) => {
    return(
        <section className="modal">
            <div className="modal__card">
                <h2 className="modal__title">Thank you for choosing Kaya Makeup Studio!</h2>
                <p className="modal__body">We sent you a confirmation on the e-mail you provided during booking.</p>
                <button className="modal__button primary-button label" onClick={() => setOpenModal(false)}>Close</button>
            </div>
        </section>
    )
}

export default AppConfirmationModal;