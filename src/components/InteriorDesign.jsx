import React, { useState, useEffect } from 'react';

const InteriorDesign = ({ setCurrentPage }) => {
  const [interiorData, setInteriorData] = useState([]);

  useEffect(() => {
    fetch('/api/interior.php')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setInteriorData(data.slice(0, 4));
        }
      })
      .catch(err => console.error("Error fetching interior showcase:", err));
  }, []);



  return (
    <section className="interior-showcase-section">
      <div className="container">
        <div className="premium-services-header scroll-reveal" style={{ textAlign: 'left', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '15px' }}>
            <div className="orange-blue-pill" style={{ display: 'inline-block', margin: 0 }}>
              <span>INTERIOR EXCELLENCE</span>
            </div>
            <button 
              className="heading-arrow-btn" 
              onClick={() => {
                setCurrentPage('interior');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              aria-label="View interior showcase"
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <h2 className="premium-services-title" style={{ marginTop: '10px', margin: 0, textAlign: 'left' }}>INTERIOR DESIGN SHOWCASE</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.6)', maxWidth: '600px', margin: '12px 0 0 0', textAlign: 'left', fontSize: '0.95rem', lineHeight: '1.6' }}>
            From virtual blueprints to final material curation, we craft modern, bespoke interior spaces that reflect luxury, functionality, and structural precision.
          </p>
        </div>
        
        <div className="premium-services-grid scroll-reveal delay-200" style={{ marginTop: '40px' }}>
          {interiorData.length > 0 ? (
            interiorData.map((item, idx) => (
              <div key={item.id || idx} className="premium-service-card" style={{ transition: 'transform 0.4s ease, box-shadow 0.4s ease' }}>
                <div className="premium-service-image-wrapper" style={{ overflow: 'hidden' }}>
                  <img 
                    src={item.image ? (item.image.startsWith('http') || item.image.startsWith('/') ? item.image : '/' + item.image) : ''} 
                    alt={item.title} 
                    className="premium-service-img" 
                    style={{ transition: 'transform 0.5s ease' }} 
                  />
                </div>
                <div className="premium-service-info">
                  <span className="premium-service-number" style={{ color: '#3D5EE1' }}>{String(idx + 1).padStart(2, '0')}</span>
                  <h3 className="premium-service-card-title">{item.title}</h3>
                  <p className="premium-service-desc">{item.description}</p>
                </div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', width: '100%', gridColumn: '1 / -1', padding: '40px 0', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>
              No interior designs uploaded yet. Please add designs from the Admin Panel.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InteriorDesign;
