import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import PackageCard from '../../Components/PackageCard/PackageCard';

const Home = ({ isLoggedIn }) => {
  // Featured packages subset
  const featuredPackages = [
     {
      id: 1,
      title: "Everest Base Camp Trek",
      location: "Solu-Khumbu",
      price: "Rs. 15,000",
      duration: "12 Days",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      title: "Pokhara & Annapurna",
      location: "Kaski",
      price: "Rs. 8,000",
      duration: "5 Days",
      image: "https://images.unsplash.com/photo-1540203082986-a0de49e6cd61?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      title: "Chitwan Jungle Safari",
      location: "Chitwan",
      price: "Rs. 6,500",
      duration: "3 Days",
      image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=800&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Discover Nepal's <br /> <span className="text-highlight">Majestic</span> Beauty</h1>
            <p className="hero-subtitle">
              Embark on unforgettable journeys through the Himalayas. Professionally curated tours for students and travelers.
            </p>
            <div className="hero-actions">
              <Link to="/packages" className="btn btn-primary">Our Packages</Link>
              {!isLoggedIn && (
                <Link to="/register" className="btn btn-outline" style={{borderColor: 'var(--color-text-main)', color: 'var(--color-text-main)'}}>
                  Join Now
                </Link>
              )}
            </div>
          </div>
          <div className="hero-image-wrapper">
             <img 
               src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop&q=80" 
               alt="Hero Adventure" 
               className="hero-main-image"
             />
             <div className="hero-overlay-card glass-panel">
                <span className="overlay-title">Everest Region</span>
                <span className="overlay-subtitle">Most Popular</span>
             </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="featured-section">
        <div className="container">
           <div className="section-header">
              <h2>Top Rated Packages</h2>
              <p>Explore our most popular destinations this season.</p>
           </div>
           
           <div className="features-grid">
              {featuredPackages.map(pkg => (
                  <PackageCard key={pkg.id} {...pkg} />
              ))}
           </div>
           
           <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link to="/packages" className="btn btn-outline">View All Destinations</Link>
           </div>
        </div>
      </section>

       {/* Why Choose Us */}
      <section className="why-us-section">
        <div className="container">
           <div className="section-header">
              <h2>Experience the Difference</h2>
           </div>
           <div className="why-us-grid">
               <div className="why-card glass-panel">
                  <div className="why-icon">🛡️</div>
                  <h3>Verified & Safe</h3>
                  <p>All tour operators and guides are fully verified for your safety.</p>
               </div>
               <div className="why-card glass-panel">
                  <div className="why-icon">🎓</div>
                  <h3>Student Friendly</h3>
                  <p>Budget-friendly packages designed specifically for college groups.</p>
               </div>
               <div className="why-card glass-panel">
                  <div className="why-icon">✨</div>
                  <h3>Premium Experience</h3>
                  <p>Quality accommodation and seamless transport included.</p>
               </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
