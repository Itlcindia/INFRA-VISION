import React, { useEffect } from 'react';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-page-wrapper" style={{ minHeight: '100vh', backgroundColor: '#0A0E27', color: '#E5E5E5', paddingBottom: '80px' }}>
      <div className="services-page-header" style={{ padding: '60px 0 40px 0', textAlign: 'center' }}>
        <div className="container">
          <span className="orange-blue-pill">Legal & Compliance</span>
          <h1 className="services-page-title" style={{ color: '#FFFFFF', marginTop: '10px' }}>
            Privacy <span className="text-highlight-mint">Policy</span>
          </h1>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px', lineHeight: '1.8' }}>
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '40px', color: '#E5E5E5' }}>
          <p style={{ marginBottom: '20px', color: '#FFFFFF', fontWeight: 'bold' }}>Last Updated: July 14, 2026</p>
          <h2 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginTop: '30px', marginBottom: '15px' }}>1. Information We Collect</h2>
          <p style={{ marginBottom: '20px' }}>
            We collect personal information that you voluntarily provide to us when you fill out the contact or proposal forms on our website. This information may include your name, email address, phone number, and project details.
          </p>
          <h2 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginTop: '30px', marginBottom: '15px' }}>2. How We Use Your Information</h2>
          <p style={{ marginBottom: '20px' }}>
            We use the collected information to respond to your inquiries, process your contracting proposals, improve website performance, and communicate with you about our project specifications.
          </p>
          <h2 style={{ color: '#FFFFFF', fontSize: '1.4rem', marginTop: '30px', marginBottom: '15px' }}>3. Data Storage & Security</h2>
          <p style={{ marginBottom: '20px' }}>
            Your data is stored securely and is only accessible by authorized system administrators. We implement industry-standard security measures to prevent unauthorized data access, modification, or leakage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
