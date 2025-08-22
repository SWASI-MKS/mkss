import React, { useEffect } from "react";
import "./VaastuPlan.css";
import CP from "./CP.png";

const GovernmentApproval = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="vaastu-section">
      <div className="vaastu-top">
        <h2>Government Plot Approval Assistance</h2>
        <p>We assist in obtaining government approvals for your land, ensuring compliance with legal and municipal standards.</p>
      </div>

      <div className="examples-container">
        <div className="cards-container">
          <div className="card">
            <img src={CP} alt="DTCP Approvals" />
            <h3>DTCP Approvals</h3>
            <p>Guidance in securing Directorate of Town and Country Planning approvals.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Local Body Approvals" />
            <h3>Local Body Approvals</h3>
            <p>Support for municipal or panchayat approval processes.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Zoning & Land Use" />
            <h3>Zoning & Land Use</h3>
            <p>Assistance in aligning land use with government zoning rules.</p>
          </div>
          <div className="card">
            <img src={CP} alt="Submission & Follow-up" />
            <h3>Submission & Follow-up</h3>
            <p>End-to-end handling of application submission and approvals.</p>
          </div>
        </div>
      </div>

      <div className="vaastu-benefits">
        <h2>Benefits of Government Approval</h2>
        <div className="benefits-grid">
          <div className="benefit-card"><h3>Legal Recognition</h3><p>Approved plots are legally recognized for ownership and sale.</p></div>
          <div className="benefit-card"><h3>Bank Loan Eligibility</h3><p>Government-approved plots easily qualify for housing loans.</p></div>
          <div className="benefit-card"><h3>Market Value</h3><p>Plots with approvals have higher market value and demand.</p></div>
          <div className="benefit-card"><h3>Secure Investment</h3><p>Investors prefer government-approved layouts for security.</p></div>
          <div className="benefit-card"><h3>Transparency</h3><p>Ensures buyers and sellers have complete clarity.</p></div>
          <div className="benefit-card"><h3>Future Development</h3><p>Approval enables construction and infrastructure growth.</p></div>
        </div>
      </div>
    </section>
  );
};

export default GovernmentApproval;
