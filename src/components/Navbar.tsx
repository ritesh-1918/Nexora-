
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showConsultModal, setShowConsultModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleConsultClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar fixed top-0 w-full z-50 py-4 px-6 transition-all duration-300 ${scrolled ? 'bg-primary bg-opacity-95 shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-12 w-12 mr-2">
            <img 
              src="/nexora-logo.png" 
              alt="Nexora Logo" 
              className="h-full w-full object-contain"
              onError={(e) => {
                // Fallback if logo doesn't load
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.style.display = 'none';
              }}
            />
          </div>
          <span className="text-white text-2xl font-bold font-montserrat">NEXORA</span>
        </div>
        <div className="hidden md:flex space-x-6">
          {['Services', 'Portfolio', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-secondary font-medium"
            >
              {item}
            </a>
          ))}
        </div>
        <Button 
          className="bg-secondary hover:bg-secondary/90 text-primary font-medium btn-hover-effect"
          onClick={handleConsultClick}
        >
          Get a Free Consult
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
