import React, { useState, useEffect } from 'react';

const ScrollingTestimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/api/testimonials.php')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setReviews(data);
        }
      })
      .catch(err => console.error("Error loading scrolling reviews:", err));
  }, []);



  // Duplicate reviews to create a seamless infinite loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="scrolling-testimonials-section">
      <div className="scrolling-testimonials-container">
        <div className="scrolling-track">
          {duplicatedReviews.map((review, idx) => (
            <div key={idx} className="scrolling-review-card">
              <div className="scrolling-card-header">
                <img 
                  src={review.client_image ? (review.client_image.startsWith('/') ? review.client_image : '/' + review.client_image) : 'https://via.placeholder.com/150'} 
                  alt={review.client_name || 'Client'} 
                  className="scrolling-avatar" 
                />
                <h4 className="scrolling-name">{review.client_name}</h4>
              </div>
              <p className="scrolling-text">"{review.testimonial_text}"</p>
              <div className="scrolling-stars">
                {Array.from({ length: 5 }).map((_, starIdx) => (
                  <span key={starIdx} className={`star ${starIdx < Number(review.rating || 5) ? 'filled' : ''}`}>
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingTestimonials;
