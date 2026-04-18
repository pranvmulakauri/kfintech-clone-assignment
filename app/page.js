import React from 'react';

// 1. Component for the "Why KFintech" cards
function FeatureCard(props) {
  return (
    <div className="feature-box">
      <div className="icon">{props.icon}</div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

// 2. Component for the Solutions grid
function SolutionCard(props) {
  return (
    <div className="solution-box">
      <div className="dummy-image">Image Here</div>
      <div className="solution-text">
        <h4>{props.title}</h4>
        <a href="#">Know More {'>'}</a>
      </div>
    </div>
  );
}

// 3. Main Page Component
export default function HomePage() {
  return (
    <div>
      <style dangerouslySetInnerHTML={{
        __html: `
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            color: #333;
          }
          
          /* --- Header Flexbox --- */
          .header {
            display: flex;
            align-items: center;
            background-color: white;
            padding: 15px 30px;
            box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
          }
          .logo-link {
            text-decoration: none; /* Removes any default link underlines */
          }
          .logo-img {
            height: 45px;
            object-fit: contain;
            cursor: pointer; /* Makes the mouse turn into a pointing hand */
            transition: opacity 0.2s; /* Smooth hover effect */
          }
          .logo-img:hover {
            opacity: 0.8; /* Makes the logo slightly fade when hovered */
          }

          /* --- Hero Section Flexbox --- */
          .hero {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #0b192c;
            color: white;
            height: 400px;
            text-align: center;
            padding: 20px;
          }
          .hero h1 {
            font-size: 50px;
            margin-bottom: 10px;
          }
          
          /* --- Why Section Flexbox --- */
          .why-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 40px 20px;
            background-color: #f4f4f4;
          }
          .features-container {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            flex-wrap: wrap; 
            width: 100%;
            max-width: 1000px;
          }
          .feature-box {
            display: flex;
            flex-direction: column;
            background-color: white;
            width: 30%;
            min-width: 250px;
            padding: 20px;
            margin: 10px;
            border-radius: 5px;
            box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
          }
          .icon {
            font-size: 40px;
          }
          
          /* --- Solutions Section Flexbox --- */
          .solutions-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 40px 20px;
          }
          .solutions-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            max-width: 1000px;
          }
          .solution-box {
            display: flex;
            flex-direction: column;
            border: 1px solid #ccc;
            width: 220px;
            margin: 15px;
            border-radius: 5px;
          }
          .dummy-image {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 120px;
            background-color: #ddd;
            color: #666;
          }
          .solution-text {
            display: flex;
            flex-direction: column;
            padding: 15px;
          }
          .solution-text a {
            color: blue;
            text-decoration: none;
            margin-top: 10px;
          }
        `
      }} />

      {/* --- Header Section with Clickable Logo --- */}
      <div className="header">
        {/* Wrapping the image in an 'a' tag with href="/" makes it go to the home page */}
        <a href="/" className="logo-link">
          <img src="/download-removebg-preview.png" alt="KFintech Logo" className="logo-img" />
        </a>
      </div>

      {/* --- Section 1: Hero Banner --- */}
      <div className="hero">
        <h1>Trust</h1>
        <h2>Leadership is an achievement of Trust.</h2>
        <p>KFintech is the partner of choice for over 4000 clients across the globe.</p>
      </div>

      {/* --- Section 2: Why KFintech --- */}
      <div className="why-section">
        <h2>Why KFintech?</h2>
        <div className="features-container">
          <FeatureCard 
            icon="🔒" 
            title="Secure Platform" 
            description="Our platforms are highly resilient, secure and scalable for asset management." 
          />
          <FeatureCard 
            icon="☁️" 
            title="Everything as a Service" 
            description="We deliver software and services models for investment managers to grow." 
          />
          <FeatureCard 
            icon="🌍" 
            title="International Operations" 
            description="Our services extend to Asian economies like Malaysia, Philippines, and more." 
          />
        </div>
      </div>

      {/* --- Section 3: Our Solutions --- */}
      <div className="solutions-section">
        <h2>Our Solutions</h2>
        <div className="solutions-container">
          <SolutionCard title="Mutual Fund Solutions" />
          <SolutionCard title="Corporate Registry" />
          <SolutionCard title="Pension System" />
          <SolutionCard title="Global Funds" />
        </div>
      </div>

    </div>
  );
}