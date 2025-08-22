import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const PlotSeparation = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Plot Separation Services</h2>
        <p>We provide accurate and legal plot separation services to divide land into clear, saleable, and documented portions.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card"><img src={CP} alt="Subdivision Mapping" /><h3>Subdivision Mapping</h3><p>Clear separation of land into smaller, manageable plots.</p></div>
          <div className="card"><img src={CP} alt="Boundary Demarcation" /><h3>Boundary Demarcation</h3><p>Accurate identification and marking of property boundaries.</p></div>
          <div className="card"><img src={CP} alt="Legal Partition Plans" /><h3>Legal Partition Plans</h3><p>Preparation of government-approved partition layouts.</p></div>
          <div className="card"><img src={CP} alt="Family Property Division" /><h3>Family Property Division</h3><p>Assistance in dividing inherited or joint properties.</p></div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Plot Separation</h2>
        <div className="benefits-grid">
          <div className="benefit-card"><h3>Legal Recognition</h3><p>Each separated plot is officially documented.</p></div>
          <div className="benefit-card"><h3>Ease of Sale</h3><p>Individual plots can be sold or mortgaged easily.</p></div>
          <div className="benefit-card"><h3>Ownership Clarity</h3><p>Eliminates disputes over joint ownership.</p></div>
          <div className="benefit-card"><h3>Government Approval</h3><p>Meets all legal partition requirements.</p></div>
          <div className="benefit-card"><h3>Increased Value</h3><p>Separated plots often fetch higher market value.</p></div>
          <div className="benefit-card"><h3>Development Ready</h3><p>Facilitates faster construction and approvals.</p></div>
          <div className="benefit-card"><h3>Transparency</h3><p>Ensures fair distribution of land among parties.</p></div>
          <div className="benefit-card"><h3>Financial Benefits</h3><p>Helps in availing bank loans for individual plots.</p></div>
          <div className="benefit-card"><h3>Dispute Prevention</h3><p>Reduces family and legal conflicts.</p></div>
          <div className="benefit-card"><h3>Future Expansion</h3><p>Allows each owner to plan independently.</p></div>
        </div>
      </div>
    </section>
  );
};

export default PlotSeparation;
