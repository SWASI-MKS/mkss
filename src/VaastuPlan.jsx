  import React, { useEffect } from "react";

  import "./VaastuPlan.css";
  import CP from "./CP.png"; // your actual image

  const VaastuPlan = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
      <section className="vaastu-section">
        <div className="vaastu-top">
          <h2>Structural Design & Detailing with Vaastu</h2>
          <p>Every drawing we create comes with a Vaastu-aligned plan for harmony, safety, and efficiency.</p>
        </div>

        <div className="examples-container">
          <div className="cards-container">
            <div className="card">
              <img src={CP} alt="Residential Villa" />
              <h3>Residential Villa</h3>
              <p>Vaastu-aligned villa layout with maximum sunlight and ventilation.</p>
            </div>
            <div className="card">
              <img src={CP} alt="Commercial Complex" />
              <h3>Commercial Complex</h3>
              <p>Optimized space for offices while maintaining positive energy flow.</p>
            </div>
            <div className="card">
              <img src={CP} alt="Apartment Building" />
              <h3>Apartment Building</h3>
              <p>Layouts designed for peace, safety, and energy efficiency.</p>
            </div>
            <div className="card">
              <img src={CP} alt="Industrial Warehouse" />
              <h3>Industrial Warehouse</h3>
              <p>Functional spaces with Vaastu considerations for productivity.</p>
            </div>
          </div>
        </div>

      <div className="vaastu-benefits">
    <h2>Benefits of a Vaastu-Compliant Plan</h2>
    <div className="benefits-grid">
      <div className="benefit-card">
        <h3>Positive Energy</h3>
        <p>Ensures harmony and positive vibrations throughout your space.</p>
      </div>
      <div className="benefit-card">
        <h3>Health & Wellbeing</h3>
        <p>Supports physical and mental wellness of the occupants.</p>
      </div>
      <div className="benefit-card">
        <h3>Financial Prosperity</h3>
        <p>Enhances wealth, stability, and growth opportunities.</p>
      </div>
      <div className="benefit-card">
        <h3>Better Relationships</h3>
        <p>Promotes peace, understanding, and good interpersonal connections.</p>
      </div>
      <div className="benefit-card">
        <h3>Success & Growth</h3>
        <p>Boosts career progress, business success, and personal growth.</p>
      </div>
      <div className="benefit-card">
        <h3>Spiritual Harmony</h3>
        <p>Balances energies to create a calm and spiritually uplifting environment.</p>
      </div>
      <div className="benefit-card">
        <h3>Mental Clarity</h3>
        <p>Reduces stress and enhances focus and concentration.</p>
      </div>
      <div className="benefit-card">
        <h3>Safe Environment</h3>
        <p>Ensures protection from negative influences and accidents.</p>
      </div>
      <div className="benefit-card">
        <h3>Enhanced Creativity</h3>
        <p>Stimulates innovative thinking and problem-solving abilities.</p>
      </div>
      <div className="benefit-card">
        <h3>Balanced Lifestyle</h3>
        <p>Promotes a disciplined, balanced, and fulfilling life.</p>
      </div>
    </div>
  </div>

      </section>
    );
  };

  export default VaastuPlan;
