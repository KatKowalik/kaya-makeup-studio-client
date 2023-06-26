import "./SingleArtistPage.scss";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const SingleArtistPage = ({artists}) => {
    const { id } = useParams();
    console.log(artists)
    const artistIndex = artists.findIndex(artist => artist.artist_id == id);
    const artist = artists[artistIndex];

    return (
        <section className="single-artist">
            <div className="single-artist__image-container">
                <img src={artist.avatar} alt={artist.first_name} className="single-artist__image"/>
            </div>
            <div className="single-artist__bio">
                <h2 className="single-artist__title page-header">{`${artist.first_name} ${artist.last_name}`}</h2>
                <p className="single-artist__subtitle body-large">bridal - special events - photoshoot - airbrush - makeup lessons</p>
                <p className="single-artist__description">{`${artist.first_name} is a highly talented and passionate makeup artist with a unique creative flair. With over a decade of professional experience, they have established themselves as a sought-after artist in the beauty industry. ${artist.first_name}’s love for makeup began at a young age, and they turned their passion into a successful career. Known for their exceptional artistry skills, ${artist.first_name} has a natural ability to enhance and transform faces. They possess a keen eye for detail and a deep understanding of different skin tones, textures, and facial features. Their ability to customize makeup looks based on their clients' preferences and individuality sets them apart. With their unparalleled talent and dedication, they strive to empower individuals and help them discover their unique beauty through the art of makeup.`}</p>
                <div className="single-artist__button-container">
                    <Link to="/our_team" className="single-artist__link">
                        <button className="single-artist__button secondary-button label">Back</button>
                    </Link>
                    <Link to="/book_appointment" className="single-artist__link">
                        <button className="single-artist__button primary-button label">Book artist</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default SingleArtistPage;