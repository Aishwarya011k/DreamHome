import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#D9C1B1] text-[#2B1B12] py-12 px-6 lg:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm md:text-base">
        
        {/* Brand Section */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-bold">Dwello</h3>
          <p className="mt-4">
            Bringing you closer to your dream home, one click at a time.
          </p>
        </div>

        {/* Footer Columns */}
        <div>
          <h4 className="font-semibold mb-4">About</h4>
          <ul className="space-y-2">
            <li>Our Story</li>
            <li>Careers</li>
            <li>Our Team</li>
            <li>Resources</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2">
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>Help Center</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Find Us</h4>
          <ul className="space-y-2">
            <li>Events</li>
            <li>Locations</li>
            <li>Newsletter</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Our Social</h4>
          <ul className="space-y-2">
            <li>📷 Instagram</li>
            <li>📘 Facebook</li>
            <li>🐦 Twitter (X)</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
