import React from "react";
import { Link } from "react-router-dom";
import "./PackageCard.css";

const PackageCard = ({ id, title, image, price, duration, location }) => {
  return (
    <div className="package-card glass-panel">
      <div className="package-image-container">
         {image ? (
            <img src={image} alt={title} className="package-image" />
         ) : (
            <div className="package-image-placeholder"></div>
         )}
         <div className="package-price-float">
            <span>{price}</span>
         </div>
      </div>
      
      <div className="package-content">
        <div className="package-meta">
            <span className="meta-item"><i className="fas fa-clock"></i> {duration}</span>
            <span className="meta-item"><i className="fas fa-map-marker-alt"></i> {location}</span>
        </div>
        
        <h3 className="package-title">{title}</h3>
        
        <Link to={`/packages/${id}`} className="btn btn-outline package-btn">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
