import React, { useState } from 'react'
import './Service.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Service = () => {
    const [selectedService, setSelectedService] = useState(null);

    const handleReadMoreClick = (service) => {
        setSelectedService(service);
    };

    const handleBackClick = () => {
        setSelectedService(null);
    };
    return (
        <>
            <div id='services' className="services">
                <div className="services-title">
                    <h1>My Services</h1>
                    <img src={theme_pattern} alt="" />
                </div>
                <div className="services-container">
                    {selectedService ? (
                        <div className="service-details">
                            <h3>{selectedService.s_no}</h3>
                            <h2>{selectedService.s_name}</h2>
                            <p>{selectedService.s_desc}</p>
                            <button onClick={handleBackClick}>Back</button>
                        </div>
                    ) : (
                        Services_Data.map((services, index) => (
                            <div key={index} className='service-format' onClick={() => handleReadMoreClick(services)}>
                                <h3>{services.s_no}</h3>
                                <h2>{services.s_name}</h2>
                                <p>{services.s_desc}</p>
                                <div className="services-readmore" >
                                    <p>Read More</p>
                                    <img src={arrow_icon} alt="" />
                                </div>
                            </div>
                        ))
                    )}

                </div>
            </div>
        </>
    )
}

export default Service