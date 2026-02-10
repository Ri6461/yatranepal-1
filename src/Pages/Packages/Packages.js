import React from "react";
import PackageCard from "../../Components/PackageCard/PackageCard";
import "./Packages.css";

const Packages = () => {
    // Mock Data
    const packages = [
      {
        id: 1,
        title: "Everest Base Camp Trek",
        location: "Solu-Khumbu",
        price: "Rs. 15,000",
        duration: "12 Days",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1000",
      },
      {
        id: 2,
        title: "Pokhara & Annapurna",
        location: "Kaski",
        price: "Rs. 8,000",
        duration: "5 Days",
        image: "https://images.unsplash.com/photo-1540203082986-a0de49e6cd61?auto=format&fit=crop&q=80&w=1000",
      },
      {
        id: 3,
        title: "Chitwan Jungle Safari",
        location: "Chitwan",
        price: "Rs. 6,500",
        duration: "3 Days",
        image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&q=80&w=1000",
      },
      {
        id: 4,
        title: "Lumbini Pilgrimage",
        location: "Rupandehi",
        price: "Rs. 5,000",
        duration: "2 Days",
        image: "https://images.unsplash.com/photo-1626244243673-dcec7dd7d33d?auto=format&fit=crop&q=80&w=1000",
      },
      {
        id: 5,
        title: "Rara Lake Adventure",
        location: "Mugu",
        price: "Rs. 20,000",
        duration: "7 Days",
        image: "https://images.unsplash.com/photo-1623492701902-47d5300f607d?auto=format&fit=crop&q=80&w=1000",
      },
      {
        id: 6,
        title: "Mustang Motorbike Tour",
        location: "Mustang",
        price: "Rs. 25,000",
        duration: "9 Days",
        image: "https://images.unsplash.com/photo-1526715016551-787eb98627bc?auto=format&fit=crop&q=80&w=1000",
      },
    ];

  return (
    <div className="packages-page">
      <div className="container">
        <div className="page-header">
           <h1>Explore Our Packages</h1>
           <p>Choose from our wide range of curated tour packages.</p>
        </div>

        {/* Glassy Filter Bar */}
        <div className="filter-bar glass-panel">
           <input type="text" placeholder="Search destinations..." className="search-input" disabled />
           <select className="filter-select" disabled>
             <option>All Durations</option>
             <option>Short (1-3 Days)</option>
             <option>Medium (4-7 Days)</option>
             <option>Long (8+ Days)</option>
           </select>
           <button className="btn btn-primary" style={{borderRadius: 'var(--radius-sm)'}} disabled>Filter</button>
        </div>

        <div className="packages-grid">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
