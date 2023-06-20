import "./CreateAccountPage.scss";
import AccountCreatedModal from "../../Components/AccountCreatedModal/AccountCreatedModal";
import { createPortal } from 'react-dom';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";



const CreateAccountPage = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [focused, setFocused] = useState(false);
    const [newUser, setNewUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8080/users", newUser)
        .then((response) => {
            console.log("New user was created");
            openModal();
        })
        .catch((error) => {
            console.error("Error creating a user", error);
        }); 
    }

    const handleChange = (e) => {
        e.preventDefault();
        setNewUser({ ...newUser, [e.target.name]: e.target.value});
    }

    const handleBack = () => {
        navigate('/');
    }

    const openModal = (e) => {
        setShowModal(true)
    }

    const handleFocused = (e) => {
        setFocused(true);
    }

    return (
        <section className="create-account">
            <h1 className="create-account__title page-header">Create an account</h1>
            <form className="create-account__form" onSubmit={handleSubmit}>
                <div className="create-account__credentials">
                    <h4 className="create-account__subtitle subheader">Login credentials</h4>
                    <div className="create-account__field-container">
                        <label htmlFor="email" className="create-account__label label">E-mail</label>
                        <input 
                            name="email" 
                            type="email" 
                            id="email" 
                            className="form-field"
                            value={newUser.email}
                            required={true}
                            onChange={handleChange}
                            onBlur={handleFocused}
                            focused={focused.toString()}
                        />
                        <span className="error-span">Required field</span>
                    </div>
                    <div className="create-account__field-container">
                        <label htmlFor="confirmEmail" className="create-account__label label">Confirm e-mail</label>
                        <input 
                            name="confirmEmail" 
                            type="email" 
                            id="confirmEmail" 
                            className="form-field"
                            pattern={newUser.email}
                            required={true}
                            onBlur={handleFocused}
                            focused={focused.toString()}
                        />
                        <span className="error-span">Emails don't match</span>
                    </div>
                    <div className="create-account__field-container">
                        <label htmlFor="password" className="create-account__label label">Password</label>
                        <input 
                            name="password" 
                            type="password" 
                            id="password" 
                            className="form-field"
                            value={newUser.password}
                            onChange={handleChange}
                            required={true}
                            onBlur={handleFocused}
                            focused={focused.toString()}
                        />
                        <span className="error-span">Required field</span>
                    </div>
                    <div className="create-account__field-container">
                        <label htmlFor="confirmPassword" className="create-account__label label">Confirm password</label>
                        <input 
                            name="confirmPassword" 
                            type="password" 
                            id="confirmPassword" 
                            className="form-field"
                            pattern={newUser.password}
                            required={true}
                            onBlur={handleFocused}
                            focused={focused.toString()}
                        />
                        <span className="error-span">Passwords don't match</span>
                    </div>
                </div>
                <div className="create-account__personal-info">
                    <h4 className="create-account__subtitle subheader">Personal info</h4>
                    <div className="create-account__field-container">
                        <label htmlFor="firstName" className="create-account__label label">First name</label>
                        <input 
                            name="first_name" 
                            type="text" 
                            id="first_name" 
                            className="form-field"
                            value={newUser.first_name}
                            onChange={handleChange}
                            required={true}
                            onBlur={handleFocused}
                            focused={focused.toString()}
                        />
                        <span className="error-span">Required field</span>
                    </div>
                    <div className="create-account__field-container">
                        <label htmlFor="lastName" className="create-account__label label">Last name</label>
                        <input 
                            name="last_name" 
                            type="text" 
                            id="last_name" 
                            className="form-field"
                            value={newUser.last_name}
                            onChange={handleChange}
                            required={true}
                            onBlur={handleFocused}
                            focused={focused.toString()}
                        />
                        <span className="error-span">Required field</span>
                    </div>
                    <div className="create-account__field-container">
                        <label htmlFor="phoneNumber" className="create-account__label label">Phone number</label>
                        <input 
                            name="phone_number" 
                            type="text" 
                            id="phone_number" 
                            className="form-field"
                            value={newUser.phone_number}
                            onChange={handleChange}
                            required={true}
                            onBlur={handleFocused}
                            focused={focused.toString()}
                        />
                        <span className="error-span">Required field</span>
                    </div>
                    <div className="create-account__buttons-container">
                        <button className="create-account__button secondary-button label" onClick={handleBack}>Back</button>
                        <button className="create-account__button primary-button label">Confirm</button>
                    </div>  
                </div>
            </form>
            {showModal && createPortal(
                <AccountCreatedModal/>,
                document.body
            )}
        </section>
    )
}

export default CreateAccountPage;