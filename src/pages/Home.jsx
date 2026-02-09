import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import Features from "../components/Features.jsx";
import Services from "../components/Services.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
