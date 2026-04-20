import React from 'react';

// 1. Component for the "Why KFintech" features (Updated to Side-by-Side layout)
function FeatureRow(props) {
  return (
    <div className="feature-row">
      <div className="text-content">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div className="image-content">
        {/* Placeholder geometric SVG to match the vibe of the screenshot */}
        <svg width="200" height="200" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="#00bfff" strokeWidth="2" />
          <polygon points="50,20 80,80 20,80" fill="none" stroke="#0056b3" strokeWidth="3" />
        </svg>
      </div>
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
            background-color: #ffffff;
          }

          /* --- Header Section --- */
          .header {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between; 
            background-color: #ffffff; /* White header */
            padding: 15px 40px;
            box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
          }
          .logo-img {
            height: 45px;
            object-fit: contain;
            cursor: pointer;
          }
          .nav-links {
            display: flex;
            flex-direction: row;
            gap: 20px;
            flex-wrap: wrap;
          }
          .nav-links a {
            color: #333333; /* Dark text for white header */
            text-decoration: none;
            font-size: 14px;
            font-weight: bold;
          }
          .nav-links a:hover {
            color: #0056b3;
          }

          /* --- Section 1: Hero Banner --- */
          .hero {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #0b192c; /* Dark Blue */
            color: white;
            height: 400px;
            text-align: center;
            padding: 20px;
          }
          .hero h1 {
            font-size: 50px;
            margin-bottom: 10px;
          }
          .hero h2 {
            color: #e2e8f0;
          }

          /* --- Section 2: Why KFintech (Dark Theme from Screenshot) --- */
          .why-section {
            display: flex;
            flex-direction: column;
            background-color: #000000; /* Black background like screenshot */
            color: white;
            padding: 60px 10%;
          }
          .why-main-title {
            font-size: 45px;
            margin-bottom: 40px;
          }
          .feature-row {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 50px; /* Space between the 3 features */
          }
          .text-content {
            display: flex;
            flex-direction: column;
            flex: 1;
            padding-right: 50px;
          }
          .text-content h2 {
            color: #0056b3; /* Dark blue accent color */
            font-size: 24px;
            margin-bottom: 15px;
          }
          .text-content p {
            font-size: 15px;
            line-height: 1.6;
            color: #dddddd;
          }
          .image-content {
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
          }

          /* --- Section 3: Our Solutions --- */
          .solutions-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 60px 20px;
            background-color: #f4f4f4; /* Light gray to separate from the black section */
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
            background-color: white;
            border: 1px solid #ccc;
            width: 220px;
            margin: 15px;
            border-radius: 5px;
            box-shadow: 0px 2px 5px rgba(0,0,0,0.05);
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
          .solution-text h4 {
            margin: 0 0 10px 0;
          }
          .solution-text a {
            color: #0056b3;
            text-decoration: none;
          }
        `
      }} />

      {/* --- Header Section --- */}
      <div className="header">
        <a href="/">
          <img src="/download-removebg-preview.png" alt="KFintech Logo" className="logo-img" />
        </a>
        <div className="nav-links">
          <a href="#">Solutions</a>
          <a href="#">Products</a>
          <a href="#">About Us</a>
          <a href="#">Portfolio Companies</a>
          <a href="#">Careers</a>
          <a href="#">Contact Us</a>
        </div>
      </div>

      {/* --- Section 1: Hero Banner --- */}
      <div className="hero">
        <h1>Trust</h1>
        <h2>Leadership is an achievement of Trust.</h2>
        <p>KFintech is the partner of choice for over 4000 clients across the globe.</p>
      </div>

      {/* --- Section 2: Why KFintech --- */}
      <div className="why-section">
        <h1 className="why-main-title">Why KFinTech</h1>
        
        {/* We use our component 3 times, passing the data as props */}
        <FeatureRow 
          title="Secure Hyperscale Platform" 
          description="KFintech's asset management platforms are the leading investor and Issuer servicing platforms. Our platforms are highly resilient, secure and scalable even as they are built on mobile-first micro services architecture driven and cloud-ready frameworks." 
        />
        <FeatureRow 
          title="XAAS - Everything as a Service" 
          description="KFintech's vision is to be the most preferred and proactive solutions provider for investment managers and intermediaries enabling differentiated growth. Leveraging software and services models." 
        />
        <FeatureRow 
          title="International Operations" 
          description="KFintech's spectrum of services extend to other Asian economies such as Malaysia, Philippines, Hong Kong, Singapore in addition to being the market leader in India." 
        />
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