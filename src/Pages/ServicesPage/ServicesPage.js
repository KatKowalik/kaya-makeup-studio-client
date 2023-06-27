import "./ServicesPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";


const ServicesPage = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const getServices = async () => {
            try {
            
            const servicesData = await axios.get("http://localhost:8080/services");
            setServices(servicesData.data);
            
            } catch (error) {
                console.error(error)
            }
        }
        getServices();
    }, [])

    return (
        <section className="services">
            <h1 className="services__title page-header">Services</h1>
            <div className="services__cards">
              { services.map(service => {
                return ( 
                <div className="services__card" key={service.service_id}>
                    <div className="services__copy">
                        <h3 className="services__subtitle subheader">{service.service_name}</h3>
                        <p className="services__description body-large">{service.description}</p>
                        <p className="services__price body-large">Price: ${service.price}</p>
                    </div>
                    <img  src={service.image} alt={service.service_name} className="services__image"/>
                </div>)
            })}
            </div>
        </section>
    )
};

export default ServicesPage;