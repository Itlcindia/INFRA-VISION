import React, { useState, useEffect } from 'react';

const PremiumServices = ({ setCurrentPage }) => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetch('/api/services.php')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setServicesData(data.slice(0, 4));
        }
      })
      .catch(err => console.error("Error fetching premium services:", err));
  }, []);



  return (
    <section className="premium-services-section">
      <div className="container">
        <div className="premium-services-header scroll-reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '40px', textAlign: 'left' }}>
          <h2 className="premium-services-title" style={{ margin: 0 }}>OUR SERVICES</h2>
          <button 
            className="heading-arrow-btn" 
            onClick={() => {
              setCurrentPage('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            aria-label="View all services"
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        
        <div className="premium-services-grid scroll-reveal delay-200">
          {servicesData.length > 0 ? (
            servicesData.map((service, idx) => (
              <div key={service.id || idx} className="premium-service-card">
                <div className="premium-service-image-wrapper">
                  <img 
                    src={service.image ? (service.image.startsWith('http') || service.image.startsWith('/') ? service.image : '/' + service.image) : ''} 
                    alt={service.title} 
                    className="premium-service-img" 
                  />
                </div>
                <div className="premium-service-info">
                  <span className="premium-service-number">{String(idx + 1).padStart(2, '0')}</span>
                  <h3 className="premium-service-card-title">{service.title}</h3>
                  <p className="premium-service-desc">{service.description}</p>
                </div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', width: '100%', gridColumn: '1 / -1', padding: '40px 0', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>
              No services uploaded yet. Please add services from the Admin Panel.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PremiumServices;
