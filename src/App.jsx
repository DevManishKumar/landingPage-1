import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/heroSection';
import CompaniesSection from './components/CompaniesSection';
import ProductivitySection from './components/ProductivitySection';
import FeaturesSection from './components/FeaturesSection';
import TeamSection from './components/TeamSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className=''>
      <Header />
      <HeroSection />
      <CompaniesSection />
      <ProductivitySection />
      <FeaturesSection />
      <TeamSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;