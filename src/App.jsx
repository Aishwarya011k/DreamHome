import { useState } from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Residences from "./components/Residences";
import Testimonials from "./components/Testimonials";
import FAQBox from "./components/FAQBox";
import Footer from "./components/Footer";




function App() {
  

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Residences />
      <Testimonials />
      <FAQBox />
      <Footer />
    </div>
  )
}

export default App
