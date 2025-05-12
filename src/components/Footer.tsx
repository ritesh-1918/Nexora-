
import { Github, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">NEXORA</h3>
            <p className="text-gray-300 max-w-xs">
              Innovating the next era of technology solutions for businesses worldwide.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                <Linkedin className="h-6 w-6 animate-glow" />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                <Github className="h-6 w-6 animate-glow" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                <Instagram className="h-6 w-6 animate-glow" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-secondary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'MVP Development', 
                'Web & Mobile Apps', 
                'AI/ML Solutions',
                'Dashboard Analytics',
                'Content Production',
                'Full-Stack Development'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#services"
                    className="text-gray-300 hover:text-secondary transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© 2025 Nexora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
