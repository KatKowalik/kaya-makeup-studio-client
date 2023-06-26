import "./OurTeamPage.scss";
import { Link } from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/effect-coverflow';

  

const OurTeamPage = ({ artists }) => {
    return (
        <section className="team">
            <h1 className="team__title page-header">Meet Our Team</h1>
            <div className="team__cards-container">
                
                <Swiper
                    modules={[Navigation, EffectCoverflow]}
                    navigation={
                       { nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true}
                    }
                    effect={"coverflow"}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5
                    }}
                >
                    { artists.map(artist => {
                        return(
                            <SwiperSlide key={artist.artist_id}>
                                <Link to={`/our_team/${artist.artist_id}`} className="team__link">
                                    <div className="team__card" key={artist.artist_id}>
                                        <div className="team__overlay"></div>
                                        <img src={artist.avatar} alt={artist.first_name} className="team__artist-img"/>
                                        <div className="team__copy-container">
                                            <h4 className="team__artist-name subheader">{artist.first_name}</h4>
                                            <p className="team__services label">bridal - special events - photoshoot - airbrush - makeup lessons</p>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        )
                    })}
                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                    </div>
                </Swiper>
                
            </div>
        </section>
    )
}

export default OurTeamPage;