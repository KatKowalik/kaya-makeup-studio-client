import "./CreateAccountPage.scss";


const CreateAccountPage = () => {
    return (
        <section className="create-account">
            <h1 className="create-account__title page-header">Create an account</h1>
            <form className="create-account__form">
                <div className="create-account__credentials">
                    <h4 className="create-account__subtitle subheader">Login credentials</h4>
                    <div className="create-account__field-container">
                        <label htmlFor="email" className="create-account__label label">E-mail</label>
                        <input name="email" type="text" id="email" className="form-field"/>
                    </div>
                    <div className="create-account__field-container">
                        <label htmlFor="confirmEmail" className="create-account__label label">Confirm e-mail</label>
                        <input name="emconfirmEmailail" type="text" id="confirmEmail" className="form-field"/>
                    </div>
                    <div className="create-account__field-container">
                        <label htmlFor="password" className="create-account__label label">Password</label>
                        <input name="password" type="password" id="password" className="form-field"/>
                    </div>
                    <div className="create-account__field-container">
                        <label htmlFor="confirmPassword" className="create-account__label label">Confirm password</label>
                        <input name="confirmPassword" type="tpasswordext" id="confirmPassword" className="form-field"/>
                    </div>
                </div>
                <div className="create-account__personal-info">
                    <h4 className="create-account__subtitle subheader">Personal info</h4>
                    <div className="create-account__field-container">
                        <label htmlFor="firstName" className="create-account__label label">First name</label>
                        <input name="firstName" type="text" id="firstName" className="form-field"/>
                    </div>
                    <div className="create-account__field-container">
                        <label htmlFor="lastName" className="create-account__label label">Last name</label>
                        <input name="lastName" type="text" id="lastName" className="form-field"/>
                    </div>
                    <div className="create-account__field-container">
                        <label htmlFor="phoneNumber" className="create-account__label label">Phone number</label>
                        <input name="phoneNumber" type="text" id="phoneNumber" className="form-field"/>
                    </div>
                    <div className="create-account__buttons-container">
                        <button className="create-account__button secondary-button">Back</button>
                        <button className="create-account__button primary-button">Confirm</button>
                    </div>  
                </div>
            </form>
        </section>
    )
}

export default CreateAccountPage;