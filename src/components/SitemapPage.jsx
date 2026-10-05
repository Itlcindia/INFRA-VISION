import React, { useEffect } from 'react';

const SitemapPage = ({ setCurrentPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigateTo = (e, pageId) => {
    e.preventDefault();
    if (setCurrentPage) {
      setCurrentPage(pageId);
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const linkStyle = {
    color: '#93C5FD',
    textDecoration: 'none',
    fontSize: '0.95rem',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.2s ease',
    padding: '6px 0'
  };

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '16px',
    padding: '30px',
    transition: 'border-color 0.2s ease'
  };

  const groupTitleStyle = {
    color: '#FFFFFF',
    fontSize: '1.25rem',
    fontWeight: '700',
    marginBottom: '16px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    paddingBottom: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  };

  return (
    <div className="services-page-wrapper" style={{ minHeight: '100vh', backgroundColor: '#0A0E27', color: '#E5E5E5', paddingBottom: '80px' }}>
      <div className="services-page-header" style={{ padding: '60px 0 40px 0', textAlign: 'center' }}>
        <div className="container">
          <span className="orange-blue-pill">Website Directory</span>
          <h1 className="services-page-title" style={{ color: '#FFFFFF', marginTop: '10px' }}>
            HTML <span className="text-highlight-mint">Sitemap</span>
          </h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '600px', margin: '12px auto 0 auto', fontSize: '0.95rem' }}>
            Quick overview and direct navigation to all sections, contracting services, portfolio projects, and legal resources of InfraVision by ITLC India Pvt Ltd.
          </p>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          
          {/* Main Pages */}
          <div style={cardStyle}>
            <h2 style={groupTitleStyle}>
              <i className="fa-solid fa-compass" style={{ color: '#38BDF8', fontSize: '1.1rem' }}></i>
              Main Pages
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <li>
                <a href="/" onClick={(e) => navigateTo(e, 'home')} style={linkStyle}>
                  <i className="fa-solid fa-angle-right" style={{ fontSize: '0.75rem', opacity: 0.6 }}></i> Home
                </a>
              </li>
              <li>
                <a href="/about" onClick={(e) => navigateTo(e, 'about')} style={linkStyle}>
                  <i className="fa-solid fa-angle-right" style={{ fontSize: '0.75rem', opacity: 0.6 }}></i> About Us
                </a>
              </li>
              <li>
                <a href="/services" onClick={(e) => navigateTo(e, 'services')} style={linkStyle}>
                  <i className="fa-solid fa-angle-right" style={{ fontSize: '0.75rem', opacity: 0.6 }}></i> All Services
                </a>
              </li>
              <li>
                <a href="/projects" onClick={(e) => navigateTo(e, 'projects')} style={linkStyle}>
                  <i className="fa-solid fa-angle-right" style={{ fontSize: '0.75rem', opacity: 0.6 }}></i> Portfolio Projects
                </a>
              </li>
              <li>
                <a href="/interior" onClick={(e) => navigateTo(e, 'interior')} style={linkStyle}>
                  <i className="fa-solid fa-angle-right" style={{ fontSize: '0.75rem', opacity: 0.6 }}></i> Interior Design
                </a>
              </li>
              <li>
                <a href="/blog" onClick={(e) => navigateTo(e, 'blog')} style={linkStyle}>
                  <i className="fa-solid fa-angle-right" style={{ fontSize: '0.75rem', opacity: 0.6 }}></i> Blogs & Insights
                </a>
              </li>
              <li>
                <a href="/contact" onClick={(e) => navigateTo(e, 'contact')} style={linkStyle}>
                  <i className="fa-solid fa-angle-right" style={{ fontSize: '0.75rem', opacity: 0.6 }}></i> Contact Us & Estimates
                </a>
              </li>
            </ul>
          </div>

          {/* Construction Services */}
          <div style={cardStyle}>
            <h2 style={groupTitleStyle}>
              <i className="fa-solid fa-trowel-bricks" style={{ color: '#F59E0B', fontSize: '1.1rem' }}></i>
              Contracting Services
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <li>
                <a href="/services" onClick={(e) => navigateTo(e, 'services')} style={linkStyle}>
                  <i className="fa-solid fa-angle-right" style={{ fontSize: '0.75rem', opacity: 0.6 }}></i> Full Home Construction
                </a>
              </li>
              <li>
                <a href="/services" onClick={(e) => navigateTo(e, 'services')} style={linkStyle}>
                  <i className="fa-solid fa-angle-right" style={{ fontSize: '0.75rem', opacity: 0.6 }}></i> Turnkey Commercial Projects
                </a>
              </li>
              <li>
                <a href="/interior" onClick={(e) => navigateTo(e, 'interior')} style={linkStyle}>
                  <i className="fa-solid fa-angle-right" style={{ fontSize: '0.75rem', opacity: 0.6 }}></i> Interior Architectural Design
                </a>
              </li>
              <li>
                <a href="/services" onClick={(e) => navigateTo(e, 'services')} style={linkStyle}>
                  <i className="fa-solid fa-angle-right" style={{ fontSize: '0.75rem', opacity: 0.6 }}></i> Civil Engineering Contracting
                </a>
              </li>
              <li>
                <a href="/services" onClick={(e) => navigateTo(e, 'services')} style={linkStyle}>
                  <i className="fa-solid fa-angle-right" style={{ fontSize: '0.75rem', opacity: 0.6 }}></i> Structural Analysis & Engineering
                </a>
              </li>
              <li>
                <a href="/contact" onClick={(e) => navigateTo(e, 'contact')} style={linkStyle}>
                  <i className="fa-solid fa-angle-right" style={{ fontSize: '0.75rem', opacity: 0.6 }}></i> Request Custom Proposal
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div style={cardStyle}>
            <h2 style={groupTitleStyle}>
              <i className="fa-solid fa-shield-halved" style={{ color: '#10B981', fontSize: '1.1rem' }}></i>
              Legal & Compliance
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <li>
                <a href="/privacy-policy" onClick={(e) => navigateTo(e, 'privacy-policy')} style={linkStyle}>
                  <i className="fa-solid fa-angle-right" style={{ fontSize: '0.75rem', opacity: 0.6 }}></i> Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" onClick={(e) => navigateTo(e, 'terms-of-service')} style={linkStyle}>
                  <i className="fa-solid fa-angle-right" style={{ fontSize: '0.75rem', opacity: 0.6 }}></i> Terms of Service
                </a>
              </li>
              <li>
                <a href="/disclaimer" onClick={(e) => navigateTo(e, 'disclaimer')} style={linkStyle}>
                  <i className="fa-solid fa-angle-right" style={{ fontSize: '0.75rem', opacity: 0.6 }}></i> Disclaimer Notice
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                  <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '0.75rem', opacity: 0.6 }}></i> XML Sitemap (Search Engines)
                </a>
              </li>
            </ul>

            <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)', margin: 0, lineHeight: 1.6 }}>
                <strong>Corporate Office:</strong><br />
                G1/0049, Olive Wood Villa, Golf City, Lucknow, Uttar Pradesh – 226030<br />
                Phone: (+91) 953 234 1000
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
