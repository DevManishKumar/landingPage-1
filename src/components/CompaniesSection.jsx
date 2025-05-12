import '../styles/CompaniesSection.css'
function CompaniesSection() {
  return (
    <section className="companies-section">
      <h2>TRUSTED BY TOP-LEADING COMPANIES.</h2>
      <div className="companies-grid">
        <div className="company-card">
          <img src='images/disney-plus.png' alt='disney-logo'/>
        </div>
        <div className="company-card">
          <img src='images/google.png' alt='google-logo'/>
        </div>
        <div className="company-card">
           <img src='images/hubspot.png' alt='hobspot-logo'/>
        </div>
        <div className="company-card">
           <img src='images/youtube.png' alt='youtube-logo'/>
        </div>
        <div className="company-card">
           <img src='images/slack.png' alt='slack-logo'/>
        </div>
         <div className="company-card">
           <img src='images/shopify.png' alt='shopify-logo'/>
        </div>
      </div>
    </section>
  );
}

export default CompaniesSection;