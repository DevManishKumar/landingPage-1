import React from "react";
import "../styles/ProductivitySection.css";

function ProductivitySection() {
  return (
    <div className="productivity-container">
      <section className="productivity-section">
        <div className="productivity-Image">
          <img src="images/productivity.jpg" alt="Img" />
        </div>
        <div className="checklist">
          <h2>Boost Productivity</h2>
          <p className="section-description">
            Build an atmosphere that creates productivity in your organization
            and your company culture.
          </p>
          <ul className="checklist-items">
            <li className="checklist-item">Maximize productivity and growth </li>
            <li className="checklist-item"> Speed past your competition</li>
            <li className="checklist-item"> Learn the top techniques</li>
          </ul>
        </div>
      </section>

      <section className="automated-tasks-section">
        
       <div className="checklist">
          <h2>Automated Tasks</h2>
          <p className="section-description">
            Save time and money with our revolutionary services. We are the
            leaders in the industry.
          </p>
          <ul className="checklist-items">
            <li className="checklist-item"> Automated task management workflow</li>
            <li className="checklist-item"> Detailed analytics for your data</li>
            <li className="checklist-item"> Some awesome integrations</li>
          </ul>
        </div>
        <div className="productivity-Image">
          <img src="images/automated.jpg" alt="Img" />
        </div>
      </section>
    </div>
  );
}

export default ProductivitySection;
