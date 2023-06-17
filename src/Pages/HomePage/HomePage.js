import "./HomePage.scss";
import heroImg from "../../assets/images/hero-image.png";
import { Link } from "react-router-dom";


const HomePage = () => {
    return (
        <section className="homepage">
            <article className="homepage__copy">
                <h1 className="homepage__title page-header">Your face is in good hands</h1>
                <p className="homepage__body-copy body-large">Kaya Makeup Studio is a full service, mobile makeup agency founded by a makeup artist, Kaya Larsen. 
                No matter what your beauty needs are, we have the perfect makeup artist for you!
                Our team is made up of talented artists who all have the same goal in mind, and that is making you feel your best no matter what the occasion. </p>
                <p className="homepage__subtitle subheader">Book your appointment now!</p>
                <Link to="/book_appointment">
                    <button className="homepage__button primary-button label">Book now</button>
                </Link>
            </article>
            <img 
                src={heroImg} 
                alt="face closeup of a girl with a green smokey eye makeup" 
                className="homepage__hero-image"/>
        </section>
    )
}

export default HomePage;