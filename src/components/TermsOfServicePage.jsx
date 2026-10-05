import React, { useEffect } from 'react';

const TermsOfServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-page-wrapper" style={{ minHeight: '100vh', backgroundColor: '#0A0E27', color: '#E5E5E5', paddingBottom: '80px' }}>
      <div className="services-page-header" style={{ padding: '60px 0 40px 0', textAlign: 'center' }}>
        <div className="container">
          <span className="orange-blue-pill">Terms & Agreements</span>
          <h1 className="services-page-title" style={{ color: '#FFFFFF', marginTop: '10px' }}>
            Terms of <span className="text-highlight-mint">Service</span>
          </h1>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px', lineHeight: '1.8' }}>
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '40px', color: '#E5E5E5' }}>
          <p style={{ marginBottom: '20px', color: '#FFFFFF', fontWeight: 'bold' }}>Last Updated: July 14, 2026</p>
          <h2 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginTop: '30px', marginBottom: '15px' }}>1. Agreement to Terms</h2>
          <p style={{ marginBottom: '20px' }}>
            By accessing or using the services provided by InfraVision and ITLC India Pvt Ltd, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our services.
          </p>
          <h2 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginTop: '30px', marginBottom: '15px' }}>2. Intellectual Property</h2>
          <p style={{ marginBottom: '20px' }}>
            All website designs, structural models, text, graphics, logos, and digital architectural plans displayed on this website are the property of ITLC India Pvt Ltd and are protected under international copyright law.
          </p>
          <h2 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginTop: '30px', marginBottom: '15px' }}>3. Limitation of Liability</h2>
          <p style={{ marginBottom: '20px' }}>
            In no event shall ITLC India Pvt Ltd be liable for any direct, indirect, special, or consequential damages arising out of the use or inability to use the architectural assets or services described on this website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
