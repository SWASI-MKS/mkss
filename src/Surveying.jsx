import React, { useEffect } from "react";

import "./Surveying.css";
import CP from "./CP.png"; // same image used

const LandSurveyingServices = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Land Surveying & Mapping Services</h2>
        <p>We provide accurate and reliable land surveying solutions to support construction, design, and legal compliance.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card">
            <img src={CP} alt="Topographical Survey" />
            <h3>Topographical Survey</h3>
            <p>Detailed land mapping for contours, features, and elevation profiles.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Boundary Survey" />
            <h3>Boundary Survey</h3>
            <p>Precise boundary demarcation for legal and construction purposes.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Construction Layout" />
            <h3>Construction Layout</h3>
            <p>Accurate site marking and alignment for buildings and infrastructure.</p>
          </div>
          <div className="card">
            <img src={CP} alt="GIS & Mapping" />
            <h3>GIS & Mapping</h3>
            <p>Advanced mapping solutions integrated with Geographic Information Systems.</p>
          </div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Professional Land Surveying</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Accuracy</h3>
            <p>Ensures precise measurements for error-free planning and execution.</p>
          </div>
          <div className="benefit-card">
            <h3>Legal Compliance</h3>
            <p>Helps avoid disputes by clearly defining property boundaries.</p>
          </div>
          <div className="benefit-card">
            <h3>Project Efficiency</h3>
            <p>Supports faster and smoother construction workflows.</p>
          </div>
          <div className="benefit-card">
            <h3>Risk Reduction</h3>
            <p>Minimizes errors that could lead to costly redesigns or conflicts.</p>
          </div>
          <div className="benefit-card">
            <h3>Data for Design</h3>
            <p>Provides essential site data for architects and engineers.</p>
          </div>
          <div className="benefit-card">
            <h3>Environmental Insights</h3>
            <p>Captures terrain and natural features for sustainable planning.</p>
          </div>
          <div className="benefit-card">
            <h3>Better Planning</h3>
            <p>Facilitates smart decision-making for land use and development.</p>
          </div>
          <div className="benefit-card">
            <h3>Property Valuation</h3>
            <p>Accurate surveys help in determining fair property values.</p>
          </div>
          <div className="benefit-card">
            <h3>Safety</h3>
            <p>Ensures construction follows safe and approved alignments.</p>
          </div>
          <div className="benefit-card">
            <h3>Future Development</h3>
            <p>Creates a strong foundation for long-term land utilization.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandSurveyingServices;
