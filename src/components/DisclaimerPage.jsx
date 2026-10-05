import React, { useEffect } from 'react';

const DisclaimerPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-page-wrapper" style={{ minHeight: '100vh', backgroundColor: '#0A0E27', color: '#E5E5E5', paddingBottom: '80px' }}>
      <div className="services-page-header" style={{ padding: '60px 0 40px 0', textAlign: 'center' }}>
        <div className="container">
          <span className="orange-blue-pill">Disclaimer Notice</span>
          <h1 className="services-page-title" style={{ color: '#FFFFFF', marginTop: '10px' }}>
            Legal <span className="text-highlight-mint">Disclaimer</span>
          </h1>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px', lineHeight: '1.8' }}>
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '40px', color: '#E5E5E5' }}>
          <p style={{ marginBottom: '20px', color: '#FFFFFF', fontWeight: 'bold' }}>Last Updated: July 14, 2026</p>
          <h2 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginTop: '30px', marginBottom: '15px' }}>1. General Information Only</h2>
          <p style={{ marginBottom: '20px' }}>
            The content, images, graphics, and architectural details provided on the InfraVision website are intended for general information purposes only. They do not constitute binding contracting quotes or final structural designs.
          </p>
          <h2 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginTop: '30px', marginBottom: '15px' }}>2. Estimation Accuracy</h2>
          <p style={{ marginBottom: '20px' }}>
            While we strive to keep estimating formulas and project timelines up to date, actual construction specs, raw material costs, and timeline limits may vary. Final terms are subject to the master service agreement.
          </p>
          <h2 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginTop: '30px', marginBottom: '15px' }}>3. External Links Disclaimer</h2>
          <p style={{ marginBottom: '20px' }}>
            This website may contain links to external sites (such as Google Maps or partner portals). We are not responsible for the content, privacy policies, or practices of third-party platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPage;
