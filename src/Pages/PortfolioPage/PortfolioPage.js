import "./PortfolioPage.scss";

const imageUrl = "http://localhost:8080/portfolio-img"
const indexArr = [1, 2, 3, 4, 5];

const PortfolioPage = () => {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title subheader">Bridal</h2>
            <div className="portfolio__image-container">
            { indexArr.map(index => {
                return (
                    <img 
                        src={`${imageUrl}/bridal-${index}.png`} 
                        alt="bridal makeup" 
                        className="portfolio__image" 
                        key={index}
                    />
                )
            })}
            </div>
            <h2 className="portfolio__title subheader">Special Event</h2>
            <div className="portfolio__image-container">
            { indexArr.map(index => {
                return (
                    <img 
                        src={`${imageUrl}/event-${index}.png`} 
                        alt="special event makeup" 
                        className="portfolio__image" 
                        key={index}
                    />
                )
            })}
            </div>
            <h2 className="portfolio__title subheader">Editorial</h2>
            <div className="portfolio__image-container">
            { indexArr.map(index => {
                return (
                    <img 
                        src={`${imageUrl}/editorial-${index}.png`} 
                        alt="editorial makeup" 
                        className="portfolio__image" 
                        key={index}
                    />
                )
            })}
            </div>
        </section>
    )
}

export default PortfolioPage;