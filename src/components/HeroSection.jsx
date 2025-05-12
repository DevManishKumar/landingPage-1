import CTAButton from './CTAButton';
import '../styles/HeroSection.css'

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1><span className='hero-title-1'>Start Crafting Your </span> <br/> <span className='hero-title-2'>Next Great Idea</span></h1>
        <p className="subtitle">
          Simplifying the creation of landing pages, blog pages, application pages and so much more!
        </p>
        <CTAButton text="Purchase Now" />
        <div className="testimonial">
          <p>Learn More</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;