import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./PackageDetails.css";

const PackageDetails = () => {
  const { id } = useParams();
  const [packageData, setPackageData] = useState(null);

  // Mock Database
  const packagesDB = [
    {
      id: 1,
      title: "Everest Base Camp Trek",
      location: "Solu-Khumbu",
      price: "Rs. 15,000",
      duration: "12 Days",
      description: "Experience the thrill of standing at the base of the world's highest peak. This 12-day trek takes you through the heart of the Khumbu region, offering stunning views of Everest, Lhotse, and Nuptse. You will explore Sherpa culture, visit ancient monasteries, and walk through rhododendron forests.",
      itinerary: [
          "Day 1: Flight to Lukla & Trek to Phakding",
          "Day 2: Trek to Namche Bazaar",
          "Day 3: Acclimatization Day",
          "Day 4: Trek to Tengboche",
          "Day 5: Trek to Dingboche"
      ],
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Pokhara & Annapurna",
      location: "Kaski",
      price: "Rs. 8,000",
      duration: "5 Days",
      description: "Discover the beauty of Pokhara, the city of lakes, and trek through the stunning Annapurna region. Enjoy panoramic views of the Himalayas and experience the rich culture of the Gurung people.",
      itinerary: [
          "Day 1: Drive to Pokhara",
          "Day 2: Sightseeing in Pokhara",
          "Day 3: Trek to Ghandruk",
          "Day 4: Trek to Landruk",
          "Day 5: Drive back to Pokhara"
      ],
      image: "https://images.unsplash.com/photo-1540203082986-a0de49e6cd61?w=1200&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Chitwan Jungle Safari",
      location: "Chitwan",
      price: "Rs. 6,500",
      duration: "3 Days",
      description: "Explore the dense jungles of Chitwan National Park. Spot rhinos, tigers, and exotic birds. Experience the Tharu culture and enjoy a canoe ride on the Rapti river.",
      itinerary: [
          "Day 1: Arrival & Tharu Village Tour",
          "Day 2: Jungle Safari & Canoe Ride",
          "Day 3: Bird Watching & Departure"
      ],
      image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=1200&auto=format&fit=crop&q=80"
    },
    {
        id: 4,
        title: "Lumbini Pilgrimage",
        location: "Rupandehi",
        price: "Rs. 5,000",
        duration: "2 Days",
        description: "Visit the birthplace of Lord Buddha. Explore the sacred Maya Devi Temple, the Ashoka Pillar, and various international monasteries.",
        itinerary: [
            "Day 1: Drive to Lumbini & Temple Visit",
            "Day 2: Monastery Tour & Return"
        ],
        image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1200&auto=format&fit=crop&q=80"
    },
    {
        id: 5,
        title: "Rara Lake Adventure",
        location: "Mugu",
        price: "Rs. 20,000",
        duration: "7 Days",
        description: "Trek to the pristine Rara Lake, the largest lake in Nepal. Enjoy the serene environment, pine forests, and the sparkling blue waters of Rara.",
        itinerary: [
            "Day 1: Flight to Nepalgunj",
            "Day 2: Flight to Talcha & Trek to Rara",
            "Day 3: Explore Rara Lake",
            "Day 4: Boating & Hiking",
            "Day 5-7: Return Journey"
        ],
        image: "https://images.unsplash.com/photo-1595844477817-268a735c03c8?w=1200&auto=format&fit=crop&q=80"
    },
    {
        id: 6,
        title: "Mustang Motorbike Tour",
        location: "Mustang",
        price: "Rs. 25,000",
        duration: "9 Days",
        description: "Ride through the desert-like landscapes of Mustang. Visit the ancient walled city of Lo Manthang, explore caves, and witness the unique Tibetan culture.",
        itinerary: [
            "Day 1: Ride to Pokhara",
            "Day 2: Ride to Kalopani",
            "Day 3: Ride to Muktinath",
            "Day 4: Ride to Lo Manthang",
            "Day 5: Explore Lo Manthang"
        ],
        image: "https://images.unsplash.com/photo-1623145437817-48243bd12e84?w=1200&auto=format&fit=crop&q=80"
    }
  ];

  useEffect(() => {
    // Simulate API fetch or find in static DB
    const found_pkg = packagesDB.find(p => p.id === parseInt(id));
    setPackageData(found_pkg);
  }, [id]);

  if (!packageData) {
      return <div className="loading">Loading Package Details...</div>;
  }

  return (
    <div className="details-page">
      <div className="details-hero" style={{ backgroundImage: `url(${packageData.image})` }}>
         <div className="details-overlay glass-panel" style={{margin: '2rem', borderRadius: 'var(--radius-md)', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)'}}>
            <h1>{packageData.title}</h1>
            <p className="details-location"><i className="fas fa-map-marker-alt"></i> {packageData.location} | {packageData.duration}</p>
         </div>
      </div>

      <div className="container details-content-wrapper">
         <div className="details-main">
            <div className="details-section glass-panel" style={{padding: '2rem', borderRadius: 'var(--radius-md)'}}>
                <h2>Overview</h2>
                <p>{packageData.description}</p>
            </div>
            
            <div className="details-section glass-panel" style={{padding: '2rem', borderRadius: 'var(--radius-md)'}}>
                <h2>Itinerary Highlights</h2>
                <ul className="itinerary-list">
                    {packageData.itinerary && packageData.itinerary.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
         </div>

         <div className="details-sidebar">
            <div className="sidebar-card glass-panel">
                <div className="sidebar-price">
                    <span>{packageData.price}</span> / person
                </div>
                <div className="sidebar-info">
                    <p><strong>Duration:</strong> {packageData.duration}</p>
                    <p><strong>Category:</strong> Trekking</p>
                    <p><strong>Group Size:</strong> 2-10 People</p>
                </div>
                <button className="btn btn-primary w-100 mb-2">Book Now</button>
                <button className="btn btn-outline w-100">Add to Wishlist</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default PackageDetails;
