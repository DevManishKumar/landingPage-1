
import '../styles/FeaturesSection.css';
import { TbFileCertificate } from 'react-icons/tb';
import { AiOutlineNotification } from 'react-icons/ai';
import { GrBundle } from 'react-icons/gr';
import { MdDeveloperMode } from 'react-icons/md';
import { RiCoupon2Line } from 'react-icons/ri';

function FeaturesSection() {
  const features = [
    {
      icons: <TbFileCertificate className='feat-icon'/>,
      title: "Certifications",
      description: "Each of our plan will provide you and your team with certifications."
    },
    {
      icons: <AiOutlineNotification className='feat-icon'/>,
      title: "Notifications",
      description: "Send out notifications to all your customers to keep them engaged."
    },
    {
      icons: <GrBundle className='feat-icon'/>,
      title: "Bundles",
      description: "High-quality bundles of awesome tools to help you out."
    },
    {
      icons: <MdDeveloperMode className='feat-icon'/>,
      title: "Developer Tools",
      description: "Developer tools to help grow your application and keep it up-to-date."
    },
    {
      icons: <TbFileCertificate className='feat-icon'/>,
      title: "Building Blocks",
      description: "The right kind of building blocks to take your company to the next level."
    },
    {
      icons: <RiCoupon2Line className='feat-icon'/>,
      title: "Coupons",
      description: "Coupons system to provide special offers and discounts for your app."
    }
  ];

  return (
    <section className="features-section" id='features'>
      <div className="section-header">
        <h2>Our Features</h2>
        <p className="section-subtitle">Check out our list of awesome features below.</p>
      </div>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">
              {feature.icons}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;