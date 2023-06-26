import "./CreateAccountPage.scss";
import AccountCreatedModal from "../../Components/AccountCreatedModal/AccountCreatedModal";
import { createPortal } from 'react-dom';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Link } from "react-router-dom";
import image from "../../assets/images/confirm-img.png";

const CreateAccountPage = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [newUser, setNewUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        password: ""
    });

    console.log(newUser)
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

    return (
        <section className="create-account">
            <form className="create-account__form" onSubmit={handleSubmit}>
                <h1 className="create-account__title page-header">Create Account</h1>
                <div className="create-account__credentials">
                    <div className="create-account__name-holder">
                        <div className="create-account__field-container">
                            <label htmlFor="firstName" className="create-account__label label">First name</label>
                            <input 
                                name="first_name" 
                                type="text" 
                                id="first_name" 
                                className="form-field create-account__name"
                                value={newUser.first_name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="create-account__field-container">
                            <label htmlFor="lastName" className="create-account__label label">Last name</label>
                            <input 
                                name="last_name" 
                                type="text" 
                                id="last_name" 
                                className="form-field create-account__name"
                                value={newUser.last_name}
                                onChange={handleChange}
                            />
                        </div>
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
                        />
                    </div>
                    <div className="create-account__field-container">
                        <label htmlFor="email" className="create-account__label label">E-mail</label>
                        <input 
                            name="email" 
                            type="email" 
                            id="email" 
                            className="form-field"
                            value={newUser.email}
                            onChange={handleChange}
                        />
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
                        />
                    </div>
                    <div className="create-account__field-container">
                        <label htmlFor="confirmPassword" className="create-account__label label">Confirm password</label>
                        <input 
                            name="confirmPassword" 
                            type="password" 
                            id="confirmPassword" 
                            className="form-field"
                        />
                    </div>
                    <div className="create-account__buttons-container">
                        <button className="create-account__button secondary-button label" onClick={handleBack}>Back</button>
                        <button className="create-account__button primary-button label">Confirm</button>
                    </div>
                    <Link to="/login" className="create-account__login-span">
                        <p className="body-small">Already have an account? <span className="span"> Log in.</span></p>
                    </Link>
                </div>
            </form>
            <img src={image} alt="woman in green sweater wearing brown-toned makep" className="create-account__image"/>
            {showModal && createPortal(
                <AccountCreatedModal/>,
                document.body
            )}
        </section>
    )
}

export default CreateAccountPage;